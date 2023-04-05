const mysql = require('mysql2');
const connection = mysql.createConnection({
        host    : process.env.DB_URL,
        user    : process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
});

connection.connect();

connection.query('select * from first', (error, rows, fields) => {
        if(error) throw error;
        console.log(rows);
});
connection.end();