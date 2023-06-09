require('dotenv').config();
const mysql = require('mysql2');

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
    connection.release();
});

// close the pool when the Node.js process is terminated
process.on('SIGINT', () => {
    pool.end(err => {
        if (err) return console.log(err);
        console.log('pool has ended');
        process.exit(0);
    });
});
module.exports = pool;