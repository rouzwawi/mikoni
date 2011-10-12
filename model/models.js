var mongoose = require('mongoose');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var Chi = new Schema({
    title    : { type: String, index: true }
  , body     : String
  , date     : Date
});

module.exports.Chi = function(db) {
  return db.model('Chi', Chi);
};
