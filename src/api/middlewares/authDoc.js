async function authDocProd(req, res, next) {
  const { password } = req.body;

  /*if(req.headers.hos.includes("localhost")){

    // instantly pass through middleware if accessing from localhost
    return next();
  }*/

  //TODO create a env data for this info
  if (password === "123mudar") {
    //when password is correct, pass through middleware
    console.log("abrindo books")
    return next();
  }

  if (password !== "123mudar" && password !== undefined) {
    //return status 401 when password is wrong
    res.status(401).set("Content-Type", "text/html");
    //set that the content type is a text html

    res.send(
      Buffer.from(`
      <form method="post" onsubmit="return (function(event){
        event.preventDefault()
        console.log(event); return false;})(event);">
        <p style="color: red;">Wrong password.</p>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" />
      </form> 
         `)
    );
  } else {
    //this case is when the user didn't passed the password yet
    res.status(200).set("Content-Type", "text/html");

    //the same form but without the alert
    res.send(
      Buffer.from(`
      <form method="post" onsubmit="return (function(event){
        event.preventDefault()
        console.log(event.target); return false;})(event);">       
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" />
      </form> 
         `)
    );
  }
}

module.exports = authDocProd;
