/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/
let reset = "reset"; 
let forgot = "forgot";
function passwordChecking(password, usersInput) {
    if (usersInput === password) {
        console.log("Access Granted!");
    } else {
        console.log("Access Denied");
    }
    
}
function resetForgot(usersInput) { //no else statements because the instructions show no "else" alternatives
    if (usersInput === forgot) {
        console.log("Here is a hint");
    } 
    if (usersInput === reset) {
        console.log("Let's reset your account");
    } 
    
}
let requiredLength = 100; //declare the required length
function passwordLength(password){ 
    if (password.length < requiredLength) {
        console.log("Your password is too short!")
    }
}
let glitches = 911;
function glitchPassword(usersInput, glitches) {
    if (usersInput === glitches) {
        console.log("This password you set should not be used because it glitches the system");
    }
}

passwordChecking("MaiCrespo13", "MaiCrespo13"); //Access Granted!
passwordChecking("Mai", "MaiCrespo13");//Access Denied
resetForgot(forgot);//Here is a hint
resetForgot(reset);//Let's reset your account
passwordLength("hdsjakdhs")//Your password is too short!
glitchPassword(911, 911);//This password you set should not be used because it glitches the system

