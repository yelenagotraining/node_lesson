const mysql = require('mysql2');

const pool = mysql.createPool({ 
    host: 'localhost', 
    user: 'root', 
    database: 'node-complete', 
    password: 'iWant@fly01'
});

module.exports = pool.promise();