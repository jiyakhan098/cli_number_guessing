#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        message: "please guess a number between 1-6",
        type: "number",
        name: "userGuessedNumber:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
