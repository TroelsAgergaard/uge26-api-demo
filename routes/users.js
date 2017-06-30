const path  = require('path');
const User  = require(path.join(__dirname, '..', 'services', 'users'));

module.exports = function(app) {
    // endpoint
    app.get('/users', function(request, response, next){
        let user = new User();
        user.getAll(function(error, result) {
            if(error) {
                console.error(error.message);
                response.send(404);
                return;
            }
            response.send(result);
        })
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