var express = require('express');
var router = express.Router();

const tarjetaRouter = require('./tarjeta')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/tarjeta', tarjetaRouter);

module.exports = router;
