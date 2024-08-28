const net = require('net');

// TCP server configuration
const PORT = 8080;
const HOST = 'localhost';

// Create a TCP client
const client = new net.Socket();

// Function to connect to the server
function connectToServer() {
    client.connect(PORT, HOST, () => {
        console.log(`Connected to server at ${HOST}:${PORT}`);
    });
}

// Handle incoming data from the server
client.on('data', (data) => {
    console.log(`Received from server: ${data.toString()}`);
    
    // Optional: You can send more data or handle logic based on the server response here
});

// Handle errors
client.on('error', (err) => {
    console.error(`Client error: ${err.message}`);
    
    // Optionally, reconnect if there is an error
    console.log('Reconnecting in 5 seconds...');
    setTimeout(connectToServer, 5000); // Reconnect after 5 seconds
});

// Handle connection close
client.on('close', () => {
    console.log('Connection closed');
    
    // Optionally, reconnect if the connection is closed
    console.log('Reconnecting in 5 seconds...');
    setTimeout(connectToServer, 5000); // Reconnect after 5 seconds
});

// Initial connection
connectToServer();
