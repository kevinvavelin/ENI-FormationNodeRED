module.exports = function(RED) {

    function SayHelloUser(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on("input", function(msg) {
            msg.payload = "Hello " + msg.payload.name;
            node.send(msg);
        });
    }

    RED.nodes.registerType("user", SayHelloUser);
}
