var express = require('express');
var router = express.Router();

const tarjetaRouter = require('./tarjeta');
const registroRouter = require('./registro');
const conmeRouter = require('./articuloComicsConme');
const articuloRouter = require('./articuloFanzine');
const comicsRouter = require('./articuloComics');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/tarjeta', tarjetaRouter);
router.use('/registro', registroRouter);
router.use('/articuloComicsConme', conmeRouter);
router.use('/articuloFanzine', articuloRouter);
router.use('/articuloComics', comicsRouter);

module.exports = router;
