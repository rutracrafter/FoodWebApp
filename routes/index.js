var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/home.html'));
});

router.get('/tester', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/tester.html'));
})

module.exports = router;