const express = require("express");
const router = express.Router();
const Rental = require("../models/rental");

router.get("", function(req, res) {
  //   res.json({ ok: true });
  Rental.find({}, function(err, foundRentals) {
    res.json(foundRentals);
  });
});

router.get("/:id", function(req, res) {
  const rentalId = req.params.id;
  //error formating as title and details will be used in front-end to display error.
  Rental.findById(rentalId, function(err, foundRental) {
    if (err) {
      res.status(422).send({
        errors: [{ title: "Rental Error", detail: "could not find Rental" }]
      });
    }

    res.json(foundRental);
  });
});

module.exports = router;
