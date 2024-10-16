const fs = require('fs')

if(!fs.existsSync('./minhapasta')){
    console.log('nao existe!')
}

fs.mkdirSync('minhapasta')


if(fs.existsSync('./minhapasta')){
    console.log('existe!')
}