const express = require("express");

const app = express();

const port = 3000;

app.get("/", function(request, response) {
    response.send("Salut Scheider !");
});

app.get("/toto", function(request, response) {
    response.send("Salut toto !");
});

app.listen(port, function() {
    console.log("ExpressJS is running");
});