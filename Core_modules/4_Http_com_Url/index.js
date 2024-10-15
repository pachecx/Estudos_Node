const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name
  res.statusCode = 200;
  res.setHeader("Contenty-Type", "text/html");
  res.end("<h1>Olá, primeiro serve com html!!</h1>");
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
