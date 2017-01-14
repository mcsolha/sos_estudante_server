var mongoose = require('mongoose');
var usuarioSchema = require('../schemas/usuarioSchema');

module.exports = mongoose.model('Usuario',usuarioSchema);
