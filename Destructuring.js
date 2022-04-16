//object
const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

//one option to destructure the details function
const { title } = user.details

//another option to destructure the details function
const { name, details: { title} } = user;

function displayUserBio() {
  console.log(`${name} is a ${title}`); 
}

displayUserBio()

const { username, email } = user;

// function displayUser() {
//   console.log(`username: ${username}, email: ${email}`);  
// }

// displayUser()
