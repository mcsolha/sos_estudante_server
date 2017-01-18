var Usuario = require('../mongodb/models/usuarioModel');

module.exports = {
  materia: function(req,res) {
    var usuario = req.body.usuario;
    var materia = req.body.materia;
    Usuario.find({
      'email': usuario.email,
      'materias.nome': materia.nome
    },{
      $set: {'materias.$.nome': materia.nome}
    },function(err,list) {
      console.log(err);
      console.log(list);
      res.send(list);
    })
  }
}
