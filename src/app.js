import { spawn,exec } from 'child_process';


const canChannel = 'can0';

const candump = spawn('candump', [canChannel]);

candump.stdout.on('data', (data) => {
    //  let arr=`${data}`.split('  ');
    //  if(arr[2]=='7E8'){
    //  let length=arr[4].split(' ')[0]
    //  let hexdata=arr[4].split(' ')
    //  if(hexdata[2]==='00'){
    //  hexdata.splice(0,3)
    //  hexdata.splice(length,hexdata.length-length)
    //  hexdata=hexdata.join('').trim()
    //  console.log('hhhhh',`space${hexdata}ddd`);
    //  checkForSupported(hexdata)
    //  }else{
    //     hexdata.splice(0,3)
    //     hexdata.splice(length,hexdata.length-length)
    //     hexdata=hexdata.join('').trim()
    //     //checkData(hexdata[2],hexdata)
    //  }
    // }
     console.log(`CAN message: ${data}`);
});

candump.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});

candump.on('close', (code) => {
    console.log(`candump process exited with code ${code}`);
});  

function sendCanRequest(canId,data){
const canInterface = 'can0';
// const canId = '7E8';
// const data = '02015C0000000000';

const command = `cansend ${canInterface} ${canId}#${data}`;
let response
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error sending CAN message: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);

});
}
sendCanRequest('7DF','02010100000000');

const PIDS = [
    { "id": "01", "name": "Monitor status since DTCs cleared" },
    { "id": "02", "name": "Freeze DTC" },
    { "id": "03", "name": "Fuel system status" },
    { "id": "04", "name": "Calculated engine load" },
    { "id": "05", "name": "Engine coolant temperature" },
    { "id": "06", "name": "Short term fuel trim (bank 1)" },
    { "id": "07", "name": "Long term fuel trim (bank 1)" },
    { "id": "08", "name": "Short term fuel trim (bank 2)" },
    { "id": "09", "name": "Long term fuel trim (bank 2)" },
    { "id": "0A", "name": "Fuel pressure (gauge pressure)" },
    { "id": "0B", "name": "Intake manifold absolute pressure" },
    { "id": "0C", "name": "Engine speed" },
    { "id": "0D", "name": "Vehicle speed" },
    { "id": "0E", "name": "Timing advance" },
    { "id": "0F", "name": "Intake air temperature" },
    { "id": "10", "name": "Mass air flow sensor air flow rate" },
    { "id": "11", "name": "Throttle position" },
    { "id": "12", "name": "Commanded secondary air status" },
    { "id": "13", "name": "Oxygen sensors present (2 banks)" },
    { "id": "14", "name": "Oxygen sensor 1 (voltage)" },
    { "id": "15", "name": "Oxygen sensor 2 (voltage)" },
    { "id": "16", "name": "Oxygen sensor 3 (voltage)" },
    { "id": "17", "name": "Oxygen sensor 4 (voltage)" },
    { "id": "18", "name": "Oxygen sensor 5 (voltage)" },
    { "id": "19", "name": "Oxygen sensor 6 (voltage)" },
    { "id": "1A", "name": "Oxygen sensor 7 (voltage)" },
    { "id": "1B", "name": "Oxygen sensor 8 (voltage)" },
    { "id": "1C", "name": "OBD standards the vehicle conforms to" },
    { "id": "1D", "name": "Oxygen sensors present (4 banks)" },
    { "id": "1E", "name": "Auxiliary input status" },
    { "id": "1F", "name": "Run time since engine start" },
    { "id": "20", "name": "PIDs supported [21 - 40]" }
]


function hexToBinary(hex) {
    // Remove any leading '0x' if present
    hex = hex.replace(/^0x/, '');
    
    // Convert the hexadecimal string to a decimal number
    const decimal = parseInt(hex, 16);
    
    // Convert the decimal number to a binary string
    let binary = decimal.toString(2);
    
    // Optionally pad the binary string to ensure it is a multiple of 4 bits
    const padLength = hex.length * 4;
    binary = binary.padStart(padLength, '0');
    
    return binary;
}

function checkForSupported(value){
    const binaryValue = hexToBinary(value)
    const supportedPids = []
    for (let i in binaryValue){
        if (binaryValue[i]==1){
            supportedPids.push(PIDS[i])
        }
    }
    console.log(supportedPids);
}

// checkForSupported("1234567800")

