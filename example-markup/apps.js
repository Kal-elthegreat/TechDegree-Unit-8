/*
const express = require('express')
const app = express();

app.set('view engine', 'pug');

//routes
app.get('/',(req,res) => { // home page
    res.redirect('/books')// redirect to /books
})

app.get('/books',(req,res) => {
    res.render('index')
})

app.get('/books/new',(req,res) => {
    res.render('new-book')
})

// post books/new

app.get('/books/:id', (req,res) => {
    res.render('update-book')
})

//post books/:id

//post books/:id/delete

app.listen(3000, () => {
    console.log('App running on port 3000')
});

module.exports = app; 
*/