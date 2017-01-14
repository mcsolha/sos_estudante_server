var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  tarefa: String,
  horaIni: { hora:Number, min: Number },
  horaFin: { hora:Number, min: Number }
}, { minimize: false });
