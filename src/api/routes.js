const authDocProd = require("./middlewares/authDoc.js");
const bookRoute = require("./routes/books.js");


const routes = async (app) => {  
  app.use("/books", bookRoute);
};

module.exports = routes;
