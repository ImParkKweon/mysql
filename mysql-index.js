const mysql = require('mysql');
const connection = mysql.createConnection({
        host    : 'mysql-service.default.svc.cluster.local',
        user    : process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: 'test_DB'
});

connection.connect();

connection.query('select * from first', (error, rows, fields) => {
        if(error) throw error;
        console.log(rows, fields);
});
connection.end();