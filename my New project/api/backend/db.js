const mysql = require("mysql");

const db = mysql.createPool({
    host: 'srv425558',
    port: 3306, 
    user: 'infy',
    password: '123',
    database: 'infy-website',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Add an event listener to handle database errors
db.on('error', (err) => {
    console.log('MySQL database error:', err);
});

// Add an event listener to log when the connection is established
db.getConnection((err, connection) => {
    if (err) {
        console.log('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
    connection.release();
});

module.exports = db;

