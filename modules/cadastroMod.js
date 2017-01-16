var Usuario = require('../mongodb/models/usuarioModel');

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
    var materia = req.body.materia;
    Usuario.find({ $or: [{ email: req.body.usuario.email, materias: {$elemMatch: {nome: {$ne: materia.nome}}} }, {email: req.body.usuario.email, materias: {$size: 0}}] },function(err, usuarios) {
      if(err){
        res.send('Usuário não encontrado ou não cadastrado');
        return console.log(err);
      }
      console.log(usuarios);
      if(usuarios.length > 0){
        usuarios[0].materias.push(materia);

        usuarios[0].save(function(err,usuarioSalvo) {
          if (err) return console.log(err);
            console.log('Success!');
            res.send(usuarioSalvo);
        });
      }
    });
  }
};
