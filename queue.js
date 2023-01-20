function nextInLine(arr, item) {
  // add the number to the end of the array
 arr.push(item);
 // remove the first element of the array and return it 
  return arr.shift();
  
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
