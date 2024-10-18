const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const users = require("./users");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const basePath = path.join(__dirname, "Templates");

app.use('/users', users)

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
