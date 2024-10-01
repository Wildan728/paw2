var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  layout: "layouts/main-layout",
    res.render('index', { title: 'Express' });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
