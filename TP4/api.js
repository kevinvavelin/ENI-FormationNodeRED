const express = require("express");
const fs = require("fs");

const app = express();
app.use('/', function(request, response) {
    var flowsFile = JSON.parse(fs.readFile("flows.json"));
    response.json(flowsFile);
});


app.listen(4324, function() {
    console.log("Api is running");
});