var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nuts', { title: 'Search Results for Nuts' });
});

module.exports = router;