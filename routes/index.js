var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index');

});

module.exports = router;
