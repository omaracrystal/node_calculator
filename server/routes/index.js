var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//add a route
router.get('/add/:num/:num2', function(req, res, next) {
  var add = parseInt(req.params.num)+
    parseInt(req.params.num2)
  res.send(
    add.toString()
  )
});

router.get('/minus/:num/:num2', function(req, res, next) {
  var add = parseInt(req.params.num)-
    parseInt(req.params.num2)
  res.send(
    add.toString()
  )
});

router.get('/multiply/:num/:num2', function(req, res, next) {
  var add = parseInt(req.params.num)*
    parseInt(req.params.num2)
  res.send(
    add.toString()
  )
});

router.get('/divide/:num/:num2', function(req, res, next) {
  var add = parseInt(req.params.num)/
    parseInt(req.params.num2)
  res.send(
    add.toString()
  )
});



module.exports = router;

