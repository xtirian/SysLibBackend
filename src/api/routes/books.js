const express = require('express');
const bookModel = require('../module/book.model');
const router = express.Router();

router.get('/', async (req, res) => {
  const books = await bookModel.find({})

  if(books.length){
    return res.status(200).json(books)
  } else{
    return res.status(404).json(books)
  }
});

// I always forgot about how to make this work and get the error "throw new TypeError('Router.use() requires middleware function but got a get(fn)"

//To solve that I need to export as a module
module.exports = router;