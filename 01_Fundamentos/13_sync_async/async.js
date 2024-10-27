const fs = require("fs");

console.log("inicio");

fs.writeFileSync("tste.txt", "oi", function (err){
    setTimeout(function(){
        console.log('criado')
    },3000)
});

console.log("fim");
