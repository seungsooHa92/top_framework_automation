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
        chalk.yellowBright('Command : node index -h true/false -w [what widget to Test]')
    );

    commander
        
        .option('-h , --headless <Bool>',' True/False')
        .option('-w, --w <widget>','Test Target Widget')
        .action(()=>{
            console.log(chalk.blueBright('*********************************************************'));
            console.log(chalk.blueBright(`[Headelss : ${commander.headless}]  [Module : ${commander.w}]`));
            console.log(chalk.blueBright('*********************************************************'));

    }).parse(process.argv);

}

module.exports={
    start_prompt,
}