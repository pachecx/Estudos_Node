const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "nome",
      message: "qual o seu nome?",
    },
    {
      name: "idade",
      message: "qual a sua idade?",
    },
  ])
  .then((answers) => {
    const nome = answers.nome;
    const idade = answers.idade;
    const onlyNumbers = new RegExp("^[0-9]+$");

    if (onlyNumbers.test(idade) === false)
      return console.log("Insira um numero no campo Idade!");

    if (idade >= 18) {
      console.log(`O ${nome} é ${chalk.bold.black.bgGreen("maior")} de idade!`);
    } else {
      console.log(`O ${nome} é ${chalk.bold.black.bgRed("menor")} de idade!`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
