import chalk from "chalk";
//const chalk = require("chalk");

const nota = 10;

console.log(chalk.green("Aprovado!!"));

const nota2 = 2

if(nota2 < 7){
    console.log(chalk.bgRed("Reprovado"))
}else{
    console.log(chalk.green('Aprovado!!'))
}