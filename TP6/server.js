const http = require("http");
const express = require("express");
const RED = require("node-red");
const websocket = require("ws");

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot : "/flowManager",
    httpNodeRoot: "/nodes-custom",
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
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(8000);
RED.start(settings);