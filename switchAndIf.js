// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

//if else statement
const time = "morning" // could be "afternoon", "evening" and "night"

if(time === "morning"){
    console.log("Good Morning");
} else if (time === "afternoon") {
    console.log("Good Afternoon");
} else if (time === "evening") {
    console.log("Good Evening");
} else {
    console.log("Good night");
}

//switch statement
switch (time){
    case "morning" :
        console.log("Good Morning");
    break;
     case "afternoon":
        console.log("Good Afternoon");
    break;
    case "evening":
         console.log("Good Evening");
    break;
    default:
        console.log("Good night");
}
