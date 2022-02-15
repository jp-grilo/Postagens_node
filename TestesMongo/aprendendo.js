const mongoose = require("mongoose")

//Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/aprendendo", {
    }).then(() => {
        console.log("Conectado ao mongoDB.")
    }).catch((error) => {
        console.log("Houve um erro ao se conectar ao mongoDB: " + error)
    })

    const Schema = mongoose.Schema

    const Usuario = new Schema ({
        nome: String,
        sobrenome: String,
        nascimento: Date,
        email: String
    })
    
    mongoose.model('Usuarios', Usuario)
    
    //Adicionar dados na collection
    const AdicionarDados = mongoose.model('Usuarios')
    
    new AdicionarDados ({
        nome: 'João',
        apelido: 'Grilo',
        nascimento: 26/02/2001,
        email: 'email@exemplo.com'
    }).save().then(() => {
        console.log('Feito!')
    }).catch((erro) => {
        console.log('Erro ' + erro)
    })