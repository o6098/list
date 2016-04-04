var mongoose = require('mongoose');
mongoose.connect('mongodb://test:heroku22028222@ds011790.mlab.com:11790/momongotest');

var Schema = mongoose.Schema;

var listSchema = new Schema({
  listName : String,
  listContent : String
});

module.exports = mongoose.model('List',listSchema);
