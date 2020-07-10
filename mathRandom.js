//returns a decimal instead of 0
function randomFraction() {
  let result = 0;
  while (result === 0) {
  result = Math.random();
  }
  
  return result;
  }
  