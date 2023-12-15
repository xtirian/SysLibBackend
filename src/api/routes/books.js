const express = require("express");
const bookModel = require("../module/book.model");
const router = express.Router();

router.get("/", async (req, res) => {

  try{
  const books = await bookModel.find({});
  if (books.length) {
    return res.status(200).json(books);
  }
} catch(err){
  return res.status(404).json(err);
}
  
    
});

//get the book by ID
router.get("/:bookId", async (req, res) => {
  try {
    const theBook = await bookModel.findById(req.params.bookId);
    //to make this work, instead of using only the req.params, i must add the .bookId to tell that this params is the Id. Only then I could return the 

    console.log(req.params);

    res.status(200).json(theBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "internal error",
    });
  }
});

router.post("/", async (req, res) => {
  try{
  const newBook = await bookModel.create({
    title: req.body.title,
    pages: req.body.pages,
    ISBN: req.body.ISBN,
    publishing: req.body.publishing,
  });

  return res.status(201).json([
    newBook,
    {
      message: "Book stored",
    },
  ]);}
  catch(err){
    console.alert(err)
    return res.status(500).json({
      message: "Internal error. Couldn't store the book. Try again later."
    })
  }
});


router.put('/:bookId', async (req, res) => {

  if(req.params.bookId === NaN){
    return res.status(404).json({
      message: req.params.bookId
    })
  }

  try {
    const theBook = await bookModel.findByIdAndUpdate(
      // get the Id from params and compare with the _id
      req.params.bookId, 

      //get the body of changes
      req.body, 

      // an option to return the updated version of the document
      {new: true}
      );

    
    
    return res.status(202).json([theBook, {message: "Book successfully updated"}]);
  } catch (err) {

    console.error(err);

    return res.status(500).json({
      message: "Internal error, couldn't update",
    });
  }

});

router.delete('/:bookId', async (req, res) => {
  try {
    const theBook = await bookModel.findByIdAndDelete(
      // get the Id from params and compare with the _id
      req.params.bookId, );

    
    
    return res.status(202).json({message: "Book successfully deleted"});
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal error, couldn't update",
    });
  }

})



// I always forgot about how to make this work and get the error "throw new TypeError('Router.use() requires middleware function but got a get(fn)"

//To solve that I need to export as a module
module.exports = router;
