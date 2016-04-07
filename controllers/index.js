var List = require('../models/list');

module.exports = function(req,res,next){
  List.find({}, function(err, users){
    if(err) throw err;

    res.render('index',{userinfos:users});
  });
};
