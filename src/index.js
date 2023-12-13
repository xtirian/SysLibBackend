const express = require('express');
const routes = require('./api/routes');
const app = express();
const port = 8080;
app.use(express.json())


app.get('/', (req, res) => {

  res.send({
    message: 'Hello World!'})
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


//Routes

routes(app)