const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  // Handle incoming data from the client
  socket.on('data', (data) => {
    console.log(`Received: ${data}`);
    // Send a response back to the client
    socket.write(`Echo: ${data}`);
  });

  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start the server and listen on port 8080
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
