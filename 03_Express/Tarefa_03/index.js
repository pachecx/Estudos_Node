const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const users = require("./users");

app.use(express.static("public"));

const basePath = path.join(__dirname, "Templates");

app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
