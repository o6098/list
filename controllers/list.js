var List = require('../models/list');

module.exports = function(req,res,next){
  var list = new List({
    listName: req.body.listName,
    listContent: req.body.listContent
  });
  list.save(function(err){
    if(err) throw err;
    console.log('saveeeeeeeeeeeeeeeeeed');
  }).then(
    List.find({}, function(err,users){
      if(err) throw err;

      res.render('index',{userinfos: users});
    })
  );
}
