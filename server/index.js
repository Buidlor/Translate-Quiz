const express = require('express');
require('dotenv').config();
const mysql = require('mysql2');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('connected to database as id ' + connection.threadId);
    connection.query('SELECT * FROM users', (err, results, fields) => {
        if (err) throw err;
        console.log(results);
        connection.release();
        
    });
});
// close the pool when the Node.js process is terminated

process.on('SIGINT', () => {
    pool.end(err => {
        if (err) return console.log(err);
        console.log('pool has ended');
        process.exit(0);
    });
});








