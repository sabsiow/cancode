const express = require('express');
const app = express();
app.get("/", function(req, res){
  res.render('home');
});

app.set("view engine", "ejs");

app.listen(3000, function()
  {console.log("Server started on port 3000");}
);