
const express = require('express');
const pool = require('../db');
const router = express.Router();


//fetch all words
router.get('/getAll', (req, res) => {
    pool.query('SELECT * FROM words', (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});



module.exports = router;