let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === 'w') {
      connection.write('Move: up');
    }
    if (handleUserInput === 'a') {
      connection.write('Move: left');
    }
    if (handleUserInput === 's') {
      connection.write('Move: down');
    }
    if (handleUserInput === 'd') {
      connection.write('Move: right');
    }
    if (handleUserInput === '\u0003') {
      process.exit();
    }
    });

    return stdin;
};


module.exports = {
  setupInput
}