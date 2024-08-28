import { setupCAN } from './canConnect';
import { spawn,exec } from 'child_process';
import {decodeFrame} from './decodeframe'

const canChannel = 'can0';

const candump = spawn('candump', [canChannel]);

candump.stdout.on('data', (data) => {
     decodeFrame(data)
     console.log(`CAN message: ${data}`);
});

candump.stderr.on('data', (data) => {
    setupCAN();
    console.error(`Error: ${data}`);
});

candump.on('close', (code) => {
    console.log(`candump process exited with code ${code}`);
});  
