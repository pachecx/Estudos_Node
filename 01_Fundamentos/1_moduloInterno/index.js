const meuModulo = require("./meuModulo");
const soma = meuModulo.soma;

soma(2, 5);
soma(7, 2);

const segundoModulo = require("./segundoModulo")
const mult = segundoModulo.mult

mult(2, 2)
mult(20, 2)

const consoleExport = require("./console")
const console = consoleExport.console

console()

