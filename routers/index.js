var express = require('express');

var index = require('../controllers/index');
var list = require('../controllers/list');
var router = express.Router();

router.route('/').get(index);
router.route('/list').post(list);

module.exports = router;
