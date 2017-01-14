var mongoose = require('mongoose');
var materiaSchema = require('../schemas/materiaSchema');

module.exports = mongoose.model('Materia',materiaSchema);
