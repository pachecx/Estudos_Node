const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const item = ["item 1", "item 2", "item 3", "item 4"];

  res.render("dashboard", { item });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "artigo adawdawd lofmwpomw qwdinfner",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get("/", (req, res) => {
  const user = {
    name: "Matheus",
    lastName: "Pacheco",
  };

  const auth = true;

  res.render("home", { user: user, auth });
});

app.listen(3000, () => {
  console.log(`App rodando`);
});
