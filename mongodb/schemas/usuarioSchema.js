var mongoose = require('mongoose');

var materiaSchema = require('./materiaSchema');

var tarefasSchema = require('./tarefaSchema');

module.exports = mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    materias: [materiaSchema],
    tarefas: [tarefasSchema]
}, { minimize: false });
