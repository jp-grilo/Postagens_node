const Sequelize = require('sequelize')

// Conexão MySql
const sequelize = new Sequelize('apppostagem', 'root', '123456',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}