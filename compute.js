//Convert to Celsius
function convertToC() {
  let fValue = document.getElementById("fInputValue").value;
  let cTemp = Math.round((fValue - 32) / 1.8);
  let cAnswer = `= ${cTemp} Celsius`;
  document.getElementById("resultCValue").innerHTML = cAnswer;
}

//Convert to Fahrenheit
function convertToF() {
  let cValue = document.getElementById("cInputValue").value;
  let fTemp = Math.round((cValue * 1.8) + 32);
  let fAnswer = `= ${fTemp} Fahrenheit`;
  document.getElementById("resultFValue").innerHTML = fAnswer;
}