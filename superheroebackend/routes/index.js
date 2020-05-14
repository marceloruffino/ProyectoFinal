var express = require('express');
var router = express.Router();

const tarjetaRouter = require('./tarjeta');
const registroRouter = require('./registro')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/tarjeta', tarjetaRouter);
router.use('/registro', registroRouter);

module.exports = router;
