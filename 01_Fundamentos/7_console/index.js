const x = 2;
const b = "kk";
const z = true;

console.log(x, b, z);

//contagem

console.count(`contagem de ${x}, contagem:`);
console.count(`contagem de ${x}, contagem:`);
console.count(`contagem de ${x}, contagem:`);
console.count(`contagem de ${x}, contagem:`);
console.count(`contagem de ${x}, contagem:`);

//limpar console

setTimeout(() => {
  console.clear();
}, 3000);
