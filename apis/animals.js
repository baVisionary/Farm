var express = require('express');
var Animals = require('../model/farmanimal');

var router = express.Router();

router.get('/', (err, req, res) => {
  console.log('Gonna look in the DB now...');
  Animals.find().then((found) => {
    res.status(200).json(found);
  });
});

router.post('/', (err, req, res) => {
  Animals.save((err, req) => {
    if (err) {
      console.log('Unable to post to DB');
      res.status(304);
    };
  }).then(() => {
    res.status(201);
  });
});

module.exports = router;
