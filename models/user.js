var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  companyId: String,
  branchId: String
});

module.exports = mongoose.model('user', schema);
