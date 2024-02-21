const net = require('net');
const { IP, PORT } = require('./constants');
let port = PORT;

const connect = function () {
  const conn = net.createConnection({
    IP,
    port
  });
  
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('You\'ve successfully connected to the server!');
    console.log('Movement: WASD');
    console.log('Send a message:');
    console.log('Q = Nice Try!');
    console.log('E = So Close!');
    console.log('X = Wow!');
    console.log('C = Nice!');
    console.log('V = GG :D');
    conn.write('Name: PD');
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};