const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: '165.227.47.243' ,// IP address here,
    port: 50541// PORT number here,
  });

  conn.on('connect', function () {
    console.log('Successfully connected to game server')
    //send message to server
    conn.write('Name: pg');
    // conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: down");
  });

  console.log('message from server', data);

  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
};




// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

// conn.on('data', function (data) {
//   console.log('Message from server:', data);
// });