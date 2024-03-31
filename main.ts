#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers = await inquirer.prompt([{
    name: "userGuessednumber",
    type: "number",
    message: "please guess a number between 1-6: ",
},
])

const randomNumber= Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);

if(answers.userGuessednumber === randomNumber){
    console.log(chalk.green("CONGRATULATIONS!! YOU  GUESSED RIGHT NUMBER:)"));
}
else{
    console.log(chalk.red("Sorry try again :("));
}