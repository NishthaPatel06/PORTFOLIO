var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My portfolio' });
});

/*GET About Page*/
router.get('/about', (req, res) => {
  res.render('about',{
  title: 'About this Site',
  content: 'About Me'
  })
})

/* Skills Page*/
router.get('/Skills', (req, res) => {
  res.render('skills',{
  title: 'My skills',
  content: 'Here it is'
  })
})

/*GET Projects Page*/
router.get('/Projects', (req, res) => {
  res.render('Projects',{
  title: 'My Projects',
  content: 'Here it is'
  })
})

/*GET Contact Page*/
router.get('/contact', (req, res) => {
  res.render('Contact',{
  title: 'Contact',
  content: 'Here it is'
  })
})

module.exports = router;
