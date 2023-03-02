const http = require("http");
const express = require("express");
const RED = require("node-red");
const fs = require("fs");
const path = require("path");

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot: "/flowManager",
    httpNodeRoot: "/nodes",
    userDir: "./",
    flowFilePretty: true,
    flowFile: "flows.json",
    credentialSecret: "",
    disableEditor: false,
    httpNodeCors: true,
    functionGlobalContext: {
        os: require("os"),
    },
    httpNodeMiddleware: function(request, response, next) {
        next();
    },
    editorTheme: {}
}

RED.init(server, settings);

app.use(express.json());

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);
app.use('/getFlow', function(req, res, next){
    
    var options = {
        root: path.join(__dirname)
    };
     
    var fileName = 'flows.json';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
            next();
        }
    });
});
app.get("/getFlow", function(request, response, next) {
    response.send();
});

server.listen(8000);
RED.start(settings);