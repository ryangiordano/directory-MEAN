var express = require('express');
var router = express.Router();
var Employee = require('../models/employee');

router.get('/', function(req, res, next) {
  Employee.find().exec(function(err, docs) {
    if (err) {
      return res.status(404).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(200).json({
      message: 'Success',
      obj: docs
    });
  });
});

router.post('/', function(req,res,next){
  Employee.find({firstName: new RegExp(req.body.string,'i')}).exec(function(err, doc){
    if(err){
      console.log("Error")
      return res.status(404).json({
        title: "No users found",
        error: err
      });
    }
    console.log("got through")
    return res.status(200).json({
      message: "Success",
      obj: doc
    });
  })
});

module.exports = router;
