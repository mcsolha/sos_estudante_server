var express = require('express'),
    router = express.Router();
var cadastroMod = require('../modules/cadastroMod');

router.post('/usuario', cadastroMod.usuario);

router.post('/materia', cadastroMod.materia);

module.exports = router;
