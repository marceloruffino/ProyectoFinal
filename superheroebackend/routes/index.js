var express = require('express');
var router = express.Router();

const tarjetaRouter = require('./tarjeta');
const registroRouter = require('./registro');
const conmeRouter = require('./tarjetaConmemorativa');
const articuloRouter = require('./articuloFanzine');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/tarjeta', tarjetaRouter);
router.use('/registro', registroRouter);
router.use('/tarjetaConmemorativa', conmeRouter);
router.use('/articuloFanzine', articuloRouter);

module.exports = router;
