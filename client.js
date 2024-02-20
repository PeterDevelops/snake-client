const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "10.0.0.177",
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Connected to the server!');
    conn.write('Name: ___');
  });


  conn.on('data', (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

module.exports = {
  connect
};