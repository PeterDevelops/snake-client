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

  // conn.on('connect', () => {
  //   conn.write('Move: down');
  // })

  setTimeout(() => {
    conn.on('connect', () => {
      conn.write('Move: up');
    }, 500);
  });

  // setTimeout(() => {
  //   conn.on('connect', () => {
  //     conn.write('Move: down');
  //   }, 1000);
  // });

  conn.on('data', (data) => {
    console.log(data);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};

/* 
Note
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/