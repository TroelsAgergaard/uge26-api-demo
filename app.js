const restify = require("restify");
const logger  = require("morgan");
const path    = require("path");
const port    = process.env.PORT || 8080;

const app     = restify.createServer({
    name: "Uge26-API-Demo",
    version: "1.0.0"
});

app.use(logger("dev"));

app.use(restify.acceptParser(app.acceptable));
// URL
app.use(restify.queryParser());
// Request body (POST)
app.use(restify.bodyParser());

// Denne linie skal placeres efter programmets logger
require(path.join(__dirname, 'routes', 'index'))(app);

app.listen(port, function(){
    console.log("%s is listening on port %s", app.name, port);
});