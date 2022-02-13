const express = require('express')
const app = express()
const Post = require('./models/Post')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

// Configdd
  // Template Engine
  app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
  app.set('view engine', 'handlebars')



// Body parser
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())


//Rotas
  app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
      console.log(posts)
      res.render('home', {posts: posts})
    })
  })

  app.get('/cadastro', function(req,res){
    res.render('formulario')
  })

  app.post('/resposta_formulario', function(req,res){
    Post.create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    }).then(function(){
      res.redirect('./')
    }).catch(function(erro){
      res.send("Erro: "+erro+" ocorreu.")
    })
  })

app.listen(3000, function(){
  console.log("Server rodando em http://localost:3000")
})