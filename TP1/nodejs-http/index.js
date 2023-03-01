const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "aplication/json");
    fs.createReadStream(".config.nodes.json").pipe(response);
});

server.listen(port, hostname, function() {
    console.log("Mon serveur tourne actuellement sur l'addresse http://" + hostname + ":"+port);
});