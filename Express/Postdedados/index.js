const express = require("express");
const app = express();
const port = 3000;

const path = require("path");


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const basePath = path.join(__dirname, "Templates");

const checkAuth = function (req, res, next) {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Logado");
    next();
  } else {
    console.log("Não Logado!");
  }
};

app.use(checkAuth);

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Novo usuario ${id}`)

  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
