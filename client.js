const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: '165.227.47.243' ,// IP address here,
    port: 50541// PORT number here,
  });

  conn.on('connect', function () {
    //send message to server
    conn.write('Name: pg');
    console.log('Successfully connected to game server')
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