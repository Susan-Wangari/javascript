//decimal places has a default parameter of 
function convertTemperature(celsius, decimalPlaces = 1) {
    // celsius to fahrenheit
  //short circuiting
//   decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));
