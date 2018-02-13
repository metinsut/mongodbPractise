const express = require("express");
const app = express();
const mongoose = require("mongoose");
const book = require("./routes/book");

mongoose
  .connect("mongodb://localhost/user")
  .then(() => {
    console.log("bağlantı tamamdır");
  })
  .catch(err => {
    console.log(err);
  });

app.use("/book", book);

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, () => {
  console.log("express server çalıştı.");
});

module.exports = app;
