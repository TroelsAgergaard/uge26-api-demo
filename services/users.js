const path  = require('path');
const mysql = require(path.join(__dirname, '..', 'config', 'mysql'));
//const mysql = require(path.normalize('..config/mysql'));
const db    = mysql.connect();

class User {
    // function
    getAll(next){
        db.execute('SELECT user_id, username FROM users', function(error, rows){
            if (error) return next(error);
            next(null, rows);
        });
    }

    getOne(username, next){
        db.execute('SELECT user_id, username FROM users WHERE username = ?', [username], function(error, rows){
            if (error) return next(error);
            next(null, rows);
        });

    }
}

module.exports = User;