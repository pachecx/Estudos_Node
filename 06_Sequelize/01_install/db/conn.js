const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()

  console.log('Conectado com sucesso!!')
} catch (error) {
  console.log('Não foi possilve conectar:', error)
}

module.export = sequelize