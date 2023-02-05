#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 1000)
    })
}

async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow(`-------Lets start Program---------`); //start
    await sleep();
    rainbowTitle.stop();
}

welcome();

async function askQuestion(){
    let que = await inquirer.prompt([
        {
            type: "input",
            name: "str",
            message: chalk.rgb(187, 143, 206)(`Please enter the Paragraph you want to convert: `)
        }
    ])
    //words
    //convert a string into an array:
    const word_arr = que.str.split(" ");
    console.log(word_arr);
    console.log(`Words in Paragraph: ${word_arr.length}`);

    //characters:
    const chr_withoutspaces = que.str.replace(/ /g,"");
    console.log(chr_withoutspaces);
    console.log(`characters in Paragraph: ${chr_withoutspaces.length}`);
}

//askQuestion()

async function startAgain(){
    do{
        await askQuestion();
        var playAgain = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.rgb(187, 143, 206)(`Do you want to restart? Press Y or N: `)
        })
    }while(playAgain.restart === 'y' || playAgain.restart === 'yes' || playAgain.restart === 'Y' || playAgain.restart === 'YES');
}

startAgain();