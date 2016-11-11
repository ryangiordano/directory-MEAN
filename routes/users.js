var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var User = require('../models/user');

router.post('/login',function(req,res,next){
  User.findOne({email: req.body.email}, function(err, user){
    if(err){
      return res.status(500).json({
        title: 'An error occured',
        error:err
      });
    }
    if(!user){
      return res.status(401).json({
        title: 'User not found',
        error: err
      });
    }
    if(!bcrypt.compareSync(req.body.password, user.password)){
      return res.status(401).json({
        title: 'Password is incorrect',
        error: err
      });
    }
    // TODO: make a hashed or dynamic secret
    var token = jwt.sign({user:user}, 'secret', {expiresIn: 7200});
    res.status(202).json({
      title: 'successfully logged in',
      token: token,
      userId: user._id,
      user:user
    })
  });
});
// router.post('/register',function(req,res,next){
//   var user = new User({
//     firstName:,
//     lastName:,
//     email:,
//     password:
//   })
//   User.create()
// });
module.exports = router;
