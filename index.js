var express = require('express');
var bodyParser = require('body-parser');
var rotas = {
  cadastro: require('./routes/cadastro')
};

//DATABASE CONNECTION
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sos_estudante');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/cadastro',rotas.cadastro);

app.listen(3000,'192.168.15.107',function() {
  console.log('SERVER ON');
});
