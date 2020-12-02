const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const commander = require('commander');

const start_prompt = ()=>{

    console.log(
        chalk.magentaBright(
            figlet.textSync('TOP V3 Automation TEST', { horizontalLayout: 'full' })
            )
        );
    console.log(
        chalk.yellowBright('Command : node index ')
    );



}

module.exports={
    start_prompt,
}