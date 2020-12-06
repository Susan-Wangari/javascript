var maths;
console.log("maths");

var variable1;
var variable1 = 25;
console.log("variable1", variable1);

//assigning a value without using var or any keyword
variable4 = 4;
console.log(variable4);

//variable mutation
var a = 5000;
a = 1000;

//copying values
var js = 10;
var java = 20;
var python = js;

console.log(js);
console.log(java);
console.log(python); //takes the value ofjs

var js = java;
var java = 30;

console.log("values after update");
console.log(js); //value changes to value of java
console.log(java); //takes the 2nd value assigned to it
console.log(python); //remains the same

var var1 = 15;
var var2 = 16;
var var3 = 17;

var temp = var1;
var var1 = var2;
var var2 = var3;
var var3 = temp;

console.log(var1);
console.log(var2);
console.log(var3);