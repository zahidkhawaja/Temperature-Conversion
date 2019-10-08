//Convert to Celsius
function convertToC() {
  let fValue = document.getElementById("fInputValue").value;
  let cTemp = Math.round((fValue - 32) / 1.8);
  document.getElementById("resultCValue").innerHTML = `= ${cTemp} Celsius`;
}

//Convert to Fahrenheit
function convertToF() {
  let cValue = document.getElementById("cInputValue").value;
  let fTemp = Math.round((cValue * 1.8) + 32);
  document.getElementById("resultFValue").innerHTML = `= ${fTemp} Fahrenheit`;
}