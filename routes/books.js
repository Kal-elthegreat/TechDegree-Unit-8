var express = require('express');
var router = express.Router();
var Book = require("../models").Book;


router.get('/books',(req,res) => {
    Book.findAll().then(books => { // select all books 
        res.render('index', { books: books, }) // display index.pug w/ books data
      })
    })
  
    // get books/new
  router.get('/books/new',(req,res) => {
    res.render('new-book', ); // render new-book form
  })
  
  // post books/new  
  // router.post('/books',(req,res) => {
  //   Book.create(req.body).then( () => { // create new book and post to /books route
  //     res.redirect('/books')
  //   })
  // })
  
  // get books/id (update-book)
  router.get('/books/:id', (req,res) => {
      Book.findById(req.params.id).then(books => {  // use params.id to select the correct book from data
        res.render('update-book', { books: books} )
      })
  })
  
  //post books/:id (updated book)
  router.post('/books/:id',(req,res) => {
    Book.findById(req.params.id).then(books => {
      return books.update(req.body)
    }).then( () => {
      res.redirect('/books')
    })
    //req
  })
  
  //post books/:id/delete (index.pug w/o deleted book)
  router.post('/books/:id/delete',(req,res) => {
    
    //req
  })
  

  module.exports = router;