var express = require('express'),
    router = express.Router();

var loginMod = require('../modules/loginMod');

router.get('/:email/:senha',loginMod.login);

module.exports = router;
