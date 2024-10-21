const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

const lista = [
  {
    id: 1,
    nome: "tv",
    valor: 2000,
    cor: "preto",
  },
  {
    id: 2,
    nome: "celular",
    valor: 3000,
    cor: "branco",
  },
  {
    id: 3,
    nome: "patinete",
    valor: 450,
    cor: "laranja",
  },
  {
    id: 4,
    nome: "aspirador de pó",
    valor: 3599,
    cor: "branco",
  },
];

app.get("/produtos", (req, res) => {
  res.render("produtos", { lista });
});

app.get("/detalhes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produto = lista.find((item) => item.id === id);

  if (produto) {
    res.render("detalhes", { produto });
  } else {
    res.status(404).render("404", { message: "Produto não encontrado" });
  }
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App rodando");
});
