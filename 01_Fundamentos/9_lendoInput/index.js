const readline = require('realine').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua linguagem?", (language) => {
    console.log(`A linguagem é: ${language}`)
    readline.close()
})