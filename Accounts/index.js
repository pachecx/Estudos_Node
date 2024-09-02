//Externos
const inquirer = require("inquirer");
const chalk = require("chalk");

//Internos
const fs = require("fs");
//console.log("iniciando")

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que voce deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      if (action === "Criar conta") {
        createAccount();
      }else if(action === 'Depositar'){

      }else if(action === 'Consultar Saldo'){
        
      }else if(action === 'Sacar'){
        
      }else if(action === 'Sair'){
        
      }
    })
    .catch((err) => console.log(err));
}

//create an account

function createAccount() {
  //console.log(chalk.bgGreen.black("Parabéns, voce criou uma conta!"));
  console.log(chalk.bgGreen("Defina as opções a seguir!"));

  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para sua conta!",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      console.info(accountName);

      if (!fs.existsSync("account")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Esta conta ja existe, escolha outro nome!!")
        );
        buildAccount();
        return
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0 }',
        function (err) {
          console.log(err);
        }
      );

      console.log(chalk.green("Parabéns, a sua conta foi criada!"));
      operation()
    })
    .catch((err) => console.log(err));
}
