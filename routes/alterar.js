var express = require('express'),
    router = express.Router();
var alterarMod = require('../modules/alterarMod');

router.post('/usuario/materia',alterarMod.materia);

module.exports = router;
