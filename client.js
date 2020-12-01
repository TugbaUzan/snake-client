const { CONNREFUSED } = require('dns');
const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host : '127.0.0.1',
    port : 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
  });

  conn.on('connect', () => {
    conn.write('Name: UZN');
  });

  conn.on('connect', () => {
    conn.write('Move: up')
  });

  conn.on('connect', () => {
    conn.write('Move: right')
  });

  conn.on('date', (data) => {
    console.log('Server says: data');
  });
}
