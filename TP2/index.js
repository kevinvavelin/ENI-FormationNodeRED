var express = require("express");
var app = express();

var port = 3000;

app.get("/", function(request, response) {
    response.send("Hello world !");
});

app.listen(port, function() {
    console.log("Notre applicatin tourne sur expressjs");
});