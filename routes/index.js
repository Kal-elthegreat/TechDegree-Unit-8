var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/',(req,res) => { // home page
  res.redirect('/books')// redirect to /books
})

router.get('/books',(req,res) => {
  res.render('index')
})

router.get('/books/new',(req,res) => {
  res.render('new-book')
})

// post books/new 
router.post('/books/new',(req,res) => {
  //req
})

router.get('/books/:id', (req,res) => {
  res.render('update-book')
})

//post books/:id
router.post('/books/:id',(req,res) => {
  //req
})

//post books/:id/delete
router.post('/books/:id/delete',(req,res) => {
  //req
})


module.exports = router;
