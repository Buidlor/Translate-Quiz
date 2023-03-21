const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//fetch all users
router.get('/getAll', (req, res) => {
    pool.query('SELECT * FROM users', (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    })
});

router.post('/subscribe', async (req, res) => {
    const { Email, UserName, Password } = req.body;

    if(!Email || !UserName || !Password){
        return res.status(400).send('Please fill all fields');
    }
    if(Password.length < 6){
        return res.status(400).send('Password must be at least 6 characters');
    }
    if(!Email.includes('@' && '.')){
        return res.status(400).send('Please enter a valid email');
    }
    //check if email already exists
    pool.query('SELECT * FROM users WHERE Email = ?', [Email], (err, results, fields) => {
        if (err) throw err;
        if(results.length > 0){
            return res.status(400).send('Email already exists');
        }
    });

    //check if username already exists
    pool.query('SELECT * FROM users WHERE UserName = ?', [UserName], (err, results, fields) => {
        if (err) throw err;
        if(results.length > 0){
            return res.status(400).send('Username already exists');
        }
    });
    try{
        const hashedPassword = await bcrypt.hash(Password, 10);
        const values = [Email, UserName, hashedPassword];
        pool.query('INSERT INTO users (Email, UserName, Password) VALUES (?)', [values], (err, results, fields) => {
            if (err) throw err;
            res.send(results);
        });
    }catch(err){
        console.log(err, "some error here");
        res.status(500).send('Server error');
    }
});

router.post('/login', async (req, res) => {
    const { UserName, Password } = req.body;
    //check if fields are empty
    if(!UserName || !Password){
        console.log("usernam and password are true/false", UserName, Password );
        return res.status(400).send('Please fill all fields');
    }
    //check if username exists
    pool.query('SELECT * FROM users WHERE UserName = ?', [UserName], (err, results, fields) => {
        if (err) throw err;
        if(results.length === 0){
            return res.status(400).send('Username does not exist');
        }
        //check if password is correct
        try{
            if(bcrypt.compareSync(Password, results[0].Password)){
                //generate and sign the JWT
                const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: 3600 });
                res.send({ token });
            }else{
                res.status(400).send({ message: 'Incorrect password' });
            }
        }catch(err){
            console.log(err);
            res.status(500).send('Server error');
        }
    });
});

router.get('/verify', (req, res) => {
    try{
        const token = req.header('x-auth-token');
        if(!token){
            return res.send(false);
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified){
            return res.send(false);
        }
        res.send(true);
    }catch(err){
        res.status(500).send('Server error');
    }
});

router.post('/logout', (req, res) => {
    try{
        const token = req.header('x-auth-token');
        if(!token){
            return res.send(false);
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified){
            return res.send(false);
        }
        res.send(true);
    }catch(err){
        res.status(500).send('Server error');
    }
});


module.exports = router;
