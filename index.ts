#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWellcome to Code with Dr.Shahid - CLI Number Guessing Game\n")

let randumNumber = Math.floor(Math.random() * 5 + 1)

let answer = await inquirer.prompt([
    {
        name: "userGuestNumher",
        type: "number",
        message: "Enter Your Guess Number(Number Limit from 1 to 5):",
    }
]);
if (answer.userGuestNumher === randumNumber) {
    console.log("Congratulations! You Guessed a correct Number.")
}
else {
    console.log("Sorry, You Guessed a Wrong Number.")
}
