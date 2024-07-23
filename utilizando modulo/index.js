const fs = require("fs");

fs.readFile("documento.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});
