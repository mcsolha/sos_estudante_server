var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  codigo: String,
  nome: String,
  professor: String,
  criterioAval: String,
  qteProvas: Number,
  qteTrabalhos: Number,
  qteExercicios: Number,
  dataAula: [{ diaSemana: String, horaAula: { hora: Number, min: Number } }],
  faltas: {totalAulas: Number, porcFaltas: Number, qtdeFaltas: Number},
  provas: [{prova: String, data: Date, nota: Number}],
  trabalhos: [{trabalho: String, data: Date, nota: Number}],
  exercicios: [{exercicio: String, data: Date, nota: Number}]
}, { minimize: false });
