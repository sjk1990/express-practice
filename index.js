var express = require("express");
// var routes = require("./route");
var app = express();

app.get("/", (res, req) => {
  res.send("listening server at port 3000");
});

app.listen(3000, () => {
  console.log("server listening port 3000");
});
