const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Salut schneider !");
});

server.listen(port, hostname, function() {
    console.log("Mon serveur tourne actuellement sur l'addresse http://" + hostname + ":"+port);
});