const express = require("express");
const router = express.Router();

// MODEL
const Book = require("../models/book");

router.post("/new", (req, res, next) => {
  const book = new Book({
    title: "sokratesin savunmasi",
    puplished: true,
    comment: [{ message: "Çok güzel kitap" }, { message: "İlginç görünüyor" }],
    meta: {
      votes: 27,
      favs: 43
    }
  });

  book.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

router.get("/search", (req, res) => {
  Book.find({title:"Bu bir başlık"}, (err, data) => {
    res.json(data);
  });
});

router.get("/searchOne", (req, res) => {
    Book.findOne({puplished:true}, (err, data) => {
      res.json(data);
    });
  });

module.exports = router;
