export function calculateEngineSpeed(hexData) {

    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);


    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);


    let result = (256 * A + B) / 4;

    return result;
}


let hexdata = "12344Z";
let engineSpeed = calculateEngineSpeed(hexdata);

console.log("Engine speed in RPM:", engineSpeed + " rpm");



// ==========================================================================================================================================================//



function calcuteEngineLoad(hexdata) {
    let hexA = hexdata.slice(0, 2)
    let A = parseInt(hexA, 16);


    let result = A / 2.55

    return result;
}


let hexData_calcute_Engine_Load = "1218XA"
let engineLoad = calcuteEngineLoad(hexData_calcute_Engine_Load)
console.log("Engine Load in percentage:", engineLoad + " %");


// ===========================================================================================================================================================//

function engineColentTemprature(hexData) {
    let hexA = hexData.slice(0, 2)


    let A = parseInt(hexA, 16)
    let result = A - 40

    return result;
}


let hexData_engine_Colent_Temprature = "1218XA"
let engine_Colent_Temprature = engineColentTemprature(hexData_engine_Colent_Temprature)
console.log("Engine coolant temperature: " + engine_Colent_Temprature + "°C");


// =========================================================================================================================================================//


function calculate_fuel_Trim(hexData) {

    let hexA = hexData.slice(0, 2)
    let A = parseInt(hexA, 16)


    let result = (A / 1.28) - 100;

    return result;


}


let hexData_fuel_Trim = "12fadf12"
let fuel_Trim_res = fuel_Trim = calculate_fuel_Trim(hexData_fuel_Trim)
console.log("fuel_Trim: " + fuel_Trim_res + " %");



// ============================================================================================================================================================//



function calculate_fuel_Pressure(hexData){


    let hexA = hexData.slice(0, 2)
    let A = parseInt(hexA, 16)


    let result =  3 * A;

    return result;

}


let hexData_fuel_Pressure ="12fadf12"
let fuel_Pressure_res = fuel_Trim = calculate_fuel_Pressure(hexData_fuel_Trim)
console.log("fuel_Pressure : " + fuel_Pressure_res + " kpa");




// ===========================================================================================================================================================//





  function intake_manifold_absolute_pressure(hexData){


    let hexA = hexData.slice(0, 2)
    let A = parseInt(hexA, 16)


    let result =  1 * A;

    return result;


  }


  let hexData_intake_manifold_absolute_pressure= "12fadf12"
  let intake_manifold_absolute_pressure_res = intake_manifold_absolute_pressure(hexData_intake_manifold_absolute_pressure)
  console.log("intake_manifold_absolute_pressure : " + intake_manifold_absolute_pressure_res + " kpa");





  // ==========================================================================================================================///






  function cal_vechile_Speed(hexData){

    let hexA =hexData.slice(0,2)
    let A = parseInt(hexA,16)
    let result = 1 * A

    return result;


  }


let hexData_vechile_Speed="1245AB22"
let vechile_speed_res = cal_vechile_Speed(hexData_vechile_Speed)
console.log("Vechile speed in Km/h:", vechile_speed_res  + " Km/h");



//=================================================t============================================================//



function cal_timing_Advance(hexData){

    let hexA =hexData.slice(0,2)

    let A = parseInt(hexA,16)

    let result = (A / 2) - 64

    return result;


}
let hexData_timing_Advance="1245AB22"
let timing_Advance_res = cal_timing_Advance(hexData_timing_Advance)
console.log("Timing Advance in deg:", timing_Advance_res  + " deg");




//=================================================================================================================//



function cal_intake_air_temp(hexData){

    let hexA =hexData.slice(0,2)

    let A = parseInt(hexA,16)

    let result = A - 40

    return result;


}
let hexData_intake_air_temp="1245AB22"
let intake_air_temp_res = cal_intake_air_temp(hexData_intake_air_temp)
console.log("Intake AIr Temp in degC:", intake_air_temp_res  + " degC");


//=============================================================================================================//



function cal_mass_air_flow(hexData){

    let hexA =hexData.slice(0,2)
    let hexB = hexData.slice(2,4)

    let A = parseInt(hexA,16)
    let B = parseInt(hexB,16)

    let result = (256 * A + B) / 100;

    return result;


}
let hexData_mass_air_flow="1234AB22"
let mass_air_flow_res = cal_mass_air_flow(hexData_mass_air_flow)
console.log("mass air flow in g/s:", mass_air_flow_res  + " g/s");



// ===========================================================================================================================//



function cal_throttle_position(hexData){

    let hexA =hexData.slice(0,2)

    let A = parseInt(hexA,16)

    let result = (100/255) * A;

    return result;


}
let hexData_throttle_position="1234AB22"
let throttle_position_res = cal_throttle_position(hexData_mass_air_flow)
console.log("throttle position in %:", throttle_position_res  + " %");


// =====================================================================================================================================//



function cal_oxigen_senV(hexData){

    let hexA =hexData.slice(0,2)

    let A = parseInt(hexA,16)

    let result = A / 200

    return result;


}
let hexData_oxigen_senV="1234AB22"
let oxigen_senV_res = cal_oxigen_senV(hexData_oxigen_senV)
console.log("oxigen sensor voltage in V:", oxigen_senV_res  + " V");


// ========================================================================================//



function cal_run_time_engine_start(hexData){

    let hexA =hexData.slice(0,2)
    let hexB =hexData.slice(2,4)

    let A = parseInt(hexA,16)
    let B = parseInt(hexB,16)

    let result = (256 * A) + B

    return result;
}



let hexData_run="1234AB22"
let engine_start_res = cal_run_time_engine_start(hexData_run)
console.log("runtime since engine start:", engine_start_res  + " seconds");







