const net = require("net");

// establishes a connection with the game server
// Update the connect function to handle incoming data and console.log it for the player.
// Once you implement this event handler, you should see a message sent to you from the server when it kicks out your snake for idling...
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });



  conn.on('connect', () => {
    console.log('Connected to the server!');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


console.log("Connecting ...");
connect();