var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: "Express Demo"});
});

router.get('/tester', (req, res) => {
  res.render('tester', {text: "this is some sample text"})
})

module.exports = router;