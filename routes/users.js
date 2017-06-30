const path  = require('path');
const mysql = require(path.join(__dirname, '..', 'config', 'mysql'));
//const mysql = require(path.normalize('..config/mysql'));
const db    = mysql.connect();

module.exports = function(app) {
    // endpoint
    app.get('/users', function(request, response, next){
        // vi skal lave et databaseopkald som henter
        // alle brugere i databsen, returnerer et JSON,
        // som vi så kan præsentere via res.send()
        // exexute er et prepared statement
        db.execute('SELECT user_id, username FROM users', function(error, rows, fields){
            if (error) {
                console.error(error.message);
                response.send(404);
                return;
            }
            response.send(200, rows);
        });
    });

    app.post('/users', function(request, response, next){
        response.send(201, request.params); 
    });

    app.get('/users/:username', function(request, response, next){
        response.send(request.params); 
    });

    app.put('/users/:username', function(request, response, next){
        response.send(405); 
    });

    app.patch('/users/:username', function(request, response, next){
        response.send(405); 
    });

    app.del('/users/:username', function(request, response, next){
        response.send(405); 
    });
}