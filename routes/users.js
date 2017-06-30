module.exports = function(app) {
    // endpoint
    app.get('/users', function(request, response, next){
        response.send([
            {
                "name": {
                    "username": "agergaard",
                    "givenname": "Troels",
                    "sirname": "Agergaard"
                }
            },{
                "name": {
                    "username": "vm",
                    "givenname": "Viggo",
                    "sirname": "Mortensen"
                }
            }
        ]); 
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