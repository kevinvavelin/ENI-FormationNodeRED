const express = require("express");

const app = express();
app.use('/', function(request, response) {
    response.json();
});

app.use("/toto", function(request, response) {

});

app.listen(4324, function() {
    console.log("Api is running");
});