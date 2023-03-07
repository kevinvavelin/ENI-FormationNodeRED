import './App.css';

function App() {
  // Connect to http://localhost/nodes-custom/ws/updateData
  // response from http://localhost/nodes-custom/ws/dataUpdated

  var socketSender = new WebSocket("ws://localhost:8000/nodes-custom/ws/updateData");
  var socketReceiver = new WebSocket("ws://localhost:8000/nodes-custom/ws/dataUpdated");

  socketReceiver.onopen = function() {
    console.log("Client connected");
    var message = {
      "cmd":"Client connected"
    };
    socketSender.send(JSON.stringify(message));
  }

  socketReceiver.onclose = function() {
    console.log("Connection closed");
  }

  socketReceiver.onmessage = function(event) {
    var serverMessage = event.data;
    document.getElementById("websocket-response").innerText = serverMessage;
    alert(serverMessage);
  }

  function sendMessage() {
    console.log("Send message");
    let message = "Ceci est un test de websocket";
    socketSender.send(message);
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Bienvenue dans react.js !</h1>
      <div className="mt-4">
        <button className="bg-white shadow-md rounded-md py-2 px-3 text-slate-900" onClick={sendMessage}>Envoie d'un message websocket</button>
      </div> 
      <div className="mt-4 space-y-4">
        <p className="text-lg font-extrabold">Réponse de websocket</p>
        <p className="text-base font-bold" id="websocket-response"></p>
      </div>
    </div>
  );
}

export default App;
