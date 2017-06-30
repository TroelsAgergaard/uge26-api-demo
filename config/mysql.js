const mysql = require('mysql2');

module.exports = {
    // mysql database connection
    connect: function(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'user'
        });
    }
};


