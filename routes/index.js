var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nishtha Patel' });
});

/*GET About Page*/
router.get('/about', (req, res) => {
  res.render('about',{
  title: 'About this Site',
  content: 'We will put stuff here'
  })
})

module.exports = router;
