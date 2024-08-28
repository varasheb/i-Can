import {checkForSupported} from './checkpid'
import {sendRequestForSupportedPIds} from './sendRequest'
import {DataHexDecoder} from './calFUnction'

export function decodeFrame(data) {
     let arr=`${data}`.split('  ');
     if(arr[2]=='7E8'){
     let length=arr[4].split(' ')[0]
     let hexdata=arr[4].split(' ')
     const pid=hexdata[2]
     hexdata.splice(0,3)
     hexdata.splice(length,hexdata.length-length)
     hexdata=hexdata.join('').trim()
     const decodedata=new DataHexDecoder();
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
         return decodedata.calcuteEngineLoad(hexdata)
       break;
       // Add other cases for different PIDs if needed
       case '05':
        return decodedata.engineColentTemprature(hexdata)

       break;
       // Add other cases for different PIDs if needed
       case '06':
        return decodedata.calculate_fuel_Trim(hexdata)

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
        return decodedata.calculate_fuel_Pressure(hexdata)
       break;
       // Add other cases for different PIDs if needed
       case '0B':
        return decodedata.intake_manifold_absolute_pressure(hexdata)

       break;
       // Add other cases for different PIDs if needed
       case '0C':
        return { id: "0C", name: "Engine speed",value:decodedata.calculateEngineSpeed(hexdata) }
       // Add other cases for different PIDs if needed
       case '0D':
        return decodedata.cal_vechile_Speed(hexdata)
       break;
       // Add other cases for different PIDs if needed
       case '0E':
        return decodedata.cal_timing_Advance(hexdata) 
       break;
       // Add other cases for different PIDs if needed
       case '0F':
        return decodedata.cal_intake_air_temp(hexdata)  
       break;
       // Add other cases for different PIDs if needed
       case '10':
         return decodedata.cal_mass_air_flow(hexdata)
       break;
       // Add other cases for different PIDs if needed
       case '11':
         return decodedata.cal_throttle_position(hexdata)
       break;
       // Add other cases for different PIDs if needed
       case '12':
            
       break;
       // Add other cases for different PIDs if needed
       case '13':
        return decodedata.cal_oxigen_senV(hexdata)

       break;
       // Add other cases for different PIDs if needed
       case '14':
        return decodedata.cal_oxigen_senV(hexdata)

       break;
       // Add other cases for different PIDs if needed
       case '15':
        return decodedata.cal_oxigen_senV(hexdata)

       break;
       // Add other cases for different PIDs if needed
       case '16':
        return decodedata.cal_oxigen_senV(hexdata)

       break;

       // Add other cases for different PIDs if needed
       case '17':
        return decodedata.cal_oxigen_senV(hexdata)

       break;
       // Add other cases for different PIDs if needed
       case '18':
        return decodedata.cal_oxigen_senV(hexdata)

       break;
       // Add other cases for different PIDs if needed
       case '19':
        return decodedata.cal_oxigen_senV(hexdata)

       break;
       // Add other cases for different PIDs if needed
       case '1A':
        return decodedata.cal_oxigen_senV(hexdata)

       break;
       // Add other cases for different PIDs if needed
       case '1B':
        return decodedata.cal_oxigen_senV(hexdata)

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
        return decodedata.cal_run_time_engine_start(hexdata)
       break;

        default:
            // Handle unknown PIDs
            console.error(`Unknown PID: ${hexdata.slice(0, 2)}`);
            return null;
    }
     }
    }
