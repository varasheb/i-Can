import {checkForSupported} from './checkpid'
import {sendRequestForSupportedPIds} from './sendRequest'

export function decodeFrame(data) {
     let arr=`${data}`.split('  ');
     if(arr[2]=='7E8'){
     let length=arr[4].split(' ')[0]
     let hexdata=arr[4].split(' ')
     const pid=hexdata[2]
     hexdata.splice(0,3)
     hexdata.splice(length,hexdata.length-length)
     hexdata=hexdata.join('').trim()

     switch (pid) {
        case '00':
            const supportedPids = checkForSupported(hexdata);
            sendRequestForSupportedPIds(supportedPids)
            console.log("------>",supportedPids);
            break;
        
        // Add other cases for different PIDs if needed
        case '01':
            
            break;
       // Add other cases for different PIDs if needed
       case '02':
            
       break;
       // Add other cases for different PIDs if needed
       case '03':
            
       break;
       // Add other cases for different PIDs if needed
       case '04':
            
       break;
       // Add other cases for different PIDs if needed
       case '05':
            
       break;
       // Add other cases for different PIDs if needed
       case '06':
            
       break;
       // Add other cases for different PIDs if needed
       case '07':
            
       break;
       // Add other cases for different PIDs if needed
       case '08':
            
       break;
       // Add other cases for different PIDs if needed
       case '09':
            
       break;
       // Add other cases for different PIDs if needed
       case '0A':
            
       break;
       // Add other cases for different PIDs if needed
       case '0B':
            
       break;
       // Add other cases for different PIDs if needed
       case '0C':

            let hexA = hexdata.slice(0, 2);
            let hexB = hexdata.slice(2, 4);
        
        
            let A = parseInt(hexA, 16);
            let B = parseInt(hexB, 16);
        
        
            let result = (256 * A + B) / 4;
        
            console.log("Engine speed in RPM:", result + " rpm");;
       break;
       // Add other cases for different PIDs if needed
       case '0D':
            
       break;
       // Add other cases for different PIDs if needed
       case '0E':
            
       break;
       // Add other cases for different PIDs if needed
       case '0F':
            
       break;
       // Add other cases for different PIDs if needed
       case '10':
            
       break;
       // Add other cases for different PIDs if needed
       case '11':
            
       break;
       // Add other cases for different PIDs if needed
       case '12':
            
       break;
       // Add other cases for different PIDs if needed
       case '13':
            
       break;
       // Add other cases for different PIDs if needed
       case '14':
            
       break;
       // Add other cases for different PIDs if needed
       case '15':
            
       break;
       // Add other cases for different PIDs if needed
       case '16':
            
       break;

       // Add other cases for different PIDs if needed
       case '17':
            
       break;
       // Add other cases for different PIDs if needed
       case '18':
            
       break;
       // Add other cases for different PIDs if needed
       case '19':
            
       break;
       // Add other cases for different PIDs if needed
       case '1A':
            
       break;
       // Add other cases for different PIDs if needed
       case '1B':
            
       break;
       // Add other cases for different PIDs if needed
       case '1C':
            
       break;
       // Add other cases for different PIDs if needed
       case '1D':
            
       break;
       // Add other cases for different PIDs if needed
       case '1E':
            
       break;

       // Add other cases for different PIDs if needed
       case '1F':
            
       break;

        default:
            // Handle unknown PIDs
            console.error(`Unknown PID: ${hexdata.slice(0, 2)}`);
            return null;
    }
     }
    }
