const net = require("net");
const { IP, PORT } = require('./constants');
let port = PORT;

const connect = function () {
  const conn = net.createConnection({
    IP,
    port
  });

  conn.on('connect', () => {
    console.log('Connected to the server!');
    conn.write('Name: ___');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};