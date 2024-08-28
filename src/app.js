import { setupCAN } from './canConnect';
import { spawn } from 'child_process';
import { decodeFrame } from './decodeframe';
const net = require('net');

let connectedClient = null; 

// CAN Channel and Process Initialization
const canChannel = 'can0';

const candump = spawn('candump', [canChannel]);

candump.stdout.on('data', (data) => {
    const decodedResult = decodeFrame(data.toString()); // Decode CAN data
    console.log(`CAN message: ${data.toString()}`);
     console.log("------------------",decodedResult);
    if (connectedClient) {
        connectedClient.write(`Decoded Data: ${decodedResult}\n`);
    }
});

candump.stderr.on('data', (data) => {
    setupCAN(); 
    console.error(`Error: ${data.toString()}`);
});

candump.on('close', (code) => {
    console.log(`candump process exited with code ${code}`);
});

const server = net.createServer((socket) => {
    console.log('Client connected');
    connectedClient = socket; 


    socket.on('data', (data) => {
        console.log(`Received from client: ${data.toString()}`);
        socket.write(`Echo: ${data.toString()}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected');
        connectedClient = null;
    });

    socket.on('error', (err) => {
        console.error(`Socket error: ${err.message}`);
    });
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});
