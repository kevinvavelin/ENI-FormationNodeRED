const http = require("http");
const express = require("express");
const path = require("path");
const RED = require("node-red");
const websocket = require("ws");
const websocketServer = new websocket.Server({noServer: true});

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

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);
app.use("/", function(request, response, next) {
    // On retourne notre page ReactJS depuis l'accueil de notre server
    response.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

server.listen(8000);
RED.start(settings);