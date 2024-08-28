const net = require('net');

// Create a TCP client
const client = new net.Socket();

// Connect to the server on localhost and port 8080
client.connect(8080, '127.0.0.1', () => {
  console.log('Connected to server');
  // Send data to the server
  client.write('Hello, Server!');
});

// Handle data received from the server
client.on('data', (data) => {
  console.log(`Received from server: ${data}`);
  // Close the connection after receiving a response
  client.destroy();
});

// Handle client disconnection
client.on('close', () => {
  console.log('Connection closed');
});
