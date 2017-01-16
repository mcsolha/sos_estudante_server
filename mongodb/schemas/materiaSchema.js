var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  nome: {type:String, index:true},
  professor: String,
  criterioAval: {mp:Number,mt:Number,me:Number},
  qteProvas: Number,
  qteTrabalhos: Number,
  qteExercicios: Number,
  dataAula: [{ _id:false, diaSemana: String, horaIni: { hora: Number, min: Number }, horaFin: { hora: Number, min: Number } }],
  faltas: {totalAulas: Number, porcFaltas: Number, qtdeFaltas: Number},
  notaProvas: [Number],
  notaTrabalhos: [Number],
  notaExercicios: [Number],
  arquivado: Boolean
}, { minimize: false });
