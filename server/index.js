const express = require('express');
require('dotenv').config();
const mysql = require('mysql2');
const Connection = require('mysql2/typings/mysql/lib/Connection');
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

});







