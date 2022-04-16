const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

// const { title } = user.details
// const { name, details: { title} } = user;

function displayUserBio({ name, details: { title} }) { //object data
  console.log(`${name} is a ${title}`); 
}

displayUserBio(user); //object passed in the function
