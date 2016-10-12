var express = require('express');
var router = express.Router();

/* GET home page. */
//non need for  '/about' because it is its own file
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About' });
});

module.exports = router;
