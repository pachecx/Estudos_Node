const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile("msg.html", function (req, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.writeFile('arquivo.txt', name, function(){
      res.writeHead(302, {
        location: '/',
      })
      res.end()
    })
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
