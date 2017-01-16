var Usuario = require('../mongodb/models/usuarioModel');
module.exports = {
  login: function(req,res) {
    console.log(req.params);
    Usuario.find({email: req.params.email, senha: req.params.senha},function(err,list) {
      // console.log(list);
      // console.log(err);
      if(err)
        res.send(err);
      if(list.length > 0)
        res.send(true);
      else
        res.send(false);
    });
  }
}
