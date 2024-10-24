const express = require('express')
const router = express.Router()
const path = require("path");

const basePath = path.join(__dirname, "../Templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/useForm.html`);
});

router.post("/save", (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuario é ${name} e sua idade é ${age}`)

  res.sendFile(`${basePath}/useform.html`)
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Novo usuario ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

module.exports = router