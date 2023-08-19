let fname = "Atharva More";
let mail = "xyz@mail.com";
let age = 18;

if(typeof fname !== "string"){
    console.log("Name should be a String.");
} else if(typeof mail !== "string"){
    console.log("Email should be a String.");
} else if(typeof age !== "number"){
    console.log("Age should be a Number.");
} else{
    console.log("All fields are good.");
}