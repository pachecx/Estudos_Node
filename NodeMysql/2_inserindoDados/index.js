const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql2");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post('/books/insertbook', (req, res) => {
  const title = req.body.title
  const page = req.body.page


  const query = `INSERT INTO books (title, page) VALUES ('${title}', '${page}')`
  conn.query(query, function(err){
    if(err){
      console.log(err)
    }

    res.redirect('/')
  })
})

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodemysql2",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("MySql conectado!");
  app.listen(3000);
});
