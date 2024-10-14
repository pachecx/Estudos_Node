const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "primeira nota?",
    },
    {
      name: "p2",
      message: "segunda nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);

    const media = ((parseInt(answers.p1) + parseInt(answers.p2)) /2)

    console.log(`media igual a ${media}`)
  })
  .catch((err) => console.log(err));
