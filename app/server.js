var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo desde Github Action!' })   
})

app.get('/galletas', function(req, res) {
  res.json({ mensaje: '¡A comer galletas!' })  
})

app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
})

app.delete('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)