const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static('public'))

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

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "JavaScript",
      body: "teste",
      comments: 45,
    },
    {
      title: "Aprender PHP",
      category: "Limguagem",
      body: "adawda",
      comments: 10,
    },
    {
      title: "Java",
      category: "Limguagem",
      body: "tytjytjueste",
      comments: 3,
    },
  ];

  res.render("blog", { posts });
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
