//ternary expression
const username = response ? response : "guest";

console.log(username);

//short circuiting
const username = response || "guest";

console.log(username);

//multiple conditions
const response = "Reed";
const isEmailVerified = true;

// let username;

// if (response) {
//   if (isEmailVerified) {
//     username = response;
//   }  
// } else {
//   username = "guest";
// }

const username = isEmailVerified && response || "guest";

console.log(username);


//parentheses make precedence over other operators
//code in brackets is executed first
const username = isEmailVerified && (response || "guest");

console.log(username);
