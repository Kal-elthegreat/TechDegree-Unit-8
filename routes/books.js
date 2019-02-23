var express = require('express');
var router = express.Router();
var Book = require("../models").Book;


router.get('/books',(req,res) => {
    Book.findAll().then(books => { // select all books 
        res.render('index', { books: books, }) // display index.pug w/ books data
      }).catch(err => {
        res.send(500);
      })
    });
  
    // get books/new
  router.get('/books/new',(req,res) => {
    res.render('new-book', ); // render new-book form
  });
  
  // post books/new  
  router.post('/books/new',(req,res) => {
    Book.create(req.body).then( () => { // create new book and post to /books route
      res.redirect('/books')
    }).catch( err => {
      if(err.name === "SequelizeValidationError"){
        res.render('new-book', {
          books: Book.build(req.body),
          errors: err.errors
        });
      } else {
        throw err;
      }
    }).catch( err => {
      res.send(500);
    })
  });
  
  // get books/id (update-book)
  router.get('/books/:id', (req,res) => {
      Book.findById(req.params.id).then(books => {  // use params.id to select the correct book from data
        if(books){
          res.render('update-book', { books: books});
        } else {
          res.render('error');
        }
      }).catch(err => {
        res.send(500);
      })
  });
  
  //post books/:id (updated book)
  router.post('/books/:id',(req,res) => {
    Book.findById(req.params.id).then(books => { // find book
      if(books){
        return books.update(req.body); // update values
      } else {
        res.send(404);
      }
    }).then( () => {
      res.redirect('/books')
    }).catch( err => {
      if(err.name === "SequelizeValidationError"){
        var books = Book.build(req.body);
        books.id = req.params.id;
        res.render('update-book', {
          books: books,
          errors: err.errors
        });
      } else {
        throw err;
      }
    }).catch(err => {
      res.send(500);
    })
  });
  
  //post books/:id/delete (index.pug w/o deleted book)
  router.post('/books/:id/delete',(req,res) => {
    Book.findById(req.params.id).then( books =>{
      if(books){
        return books.destroy();
      } else {
        res.send(404);
      } 
    }).then( () =>{
      res.redirect('/books')
    }).catch(err => {
      res.send(500);
    })
  });
  

  module.exports = router;