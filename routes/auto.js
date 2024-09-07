var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('auto');

});

module.exports = router;