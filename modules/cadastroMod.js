var Usuario = require('../mongodb/models/usuarioModel');
var Materia = require('../mongodb/models/materiaModel');

module.exports = {
  usuario: function(req,res) {
    var usuario = new Usuario(
      {
        // _id: req.body.email,
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
      });
    usuario.save(function(err, usuarioSalvo) {
      if(err) {
        res.send('ERRO');
        return console.error(err);
      }
      res.send(usuarioSalvo._id + ' Cadastro realizado com sucesso!');
    });
  },
  materia: function(req,res) {
    console.log(req.body.usuario.email);
    Usuario.find({ email: req.body.usuario.email },function(err, result) {
      if(err){
        res.send('Usuário não encontrado ou não cadastrado');
        return console.log(err);
      }
      console.log(result);

    });
  }
};
