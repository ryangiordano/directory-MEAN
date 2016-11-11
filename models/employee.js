var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  firstName:{
    type: String,
    required:true
  },
  lastName:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:true
  },
  phone:{
    type: String,
    required:true
  },
  title:{
    type: String,
    required:true
  },
  branch:{
    type: String,
    required:false
  },
  picture:{
    type: String,
    required:false
  }
});

module.exports = mongoose.model('employee', schema);
