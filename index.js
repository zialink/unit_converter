let unit_input = document.getElementById("ntc");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

// 1 meter = 3.28084 feet
// 1 liter = 0.264172 gallons
// 1 kilogram = 2.20462 pounds

//unit_input.textContent = 40;

function convert_input_to_int(input) {
  return parseInt(input);
}

function convert_length() {
  let input = convert_input_to_int(unit_input.value);
  let meters = input / 3.28084;
  let feet = input * 3.28084;

  let length_content = `${input} meters = ${feet.toFixed(
    3
  )} feet | ${input} feet = ${meters.toFixed(3)} meters`;
  length.textContent = length_content;
}
function convert_volume() {
  let input = convert_input_to_int(unit_input.value);
  let liters = input / 0.264172;
  let gallons = input * 0.264172;

  let volume_content = `${input} liters = ${gallons.toFixed(
    3
  )} gallons | ${input} gallons = ${liters.toFixed(3)} liters`;
  volume.textContent = volume_content;
}
function convert_mass() {
  let input = convert_input_to_int(unit_input.value);
  let kilos = input / 2.20462;
  let pounds = input * 2.20462;

  let mass_content = `${input} kilos = ${pounds.toFixed(
    3
  )} pounds | ${input} pounds = ${kilos.toFixed(3)} kilos`;
  mass.textContent = mass_content;
}

function convert_all() {
  convert_length();
  convert_volume();
  convert_mass();
}
