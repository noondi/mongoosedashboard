var mongoose = require('mongoose');
var Jedi = mongoose.model('Jedi')
module.exports = {
  showAll: function(req, res){
    Jedi.find({}, function(err, jedis){
      if(err) { console.log(err);}
      res.render('index.ejs', {tous: jedis})
    });
  },

  showOne: function(req, res){
    Jedi.find({_id: req.params.id}, function(err, jedi){
      if(err){console.log(err);}
      res.render('show.ejs', {citizen: jedi})
    });
  },

  createnew: function(req, res){
    var jedi = new Jedi({
      name: req.body.name,
      age: req.body.age,
      citizenship: req.body.citizenship,
      category: req.body.category,
      educationalStage: req.body.educationalStage,
      council: req.body.council,
      weapon: req.body.weapon,
      criminalRecord: req.body.criminalRecord,
    });
    jedi.save(function(err){
      if(err){
            console.log(err);
      }
      else {
            res.redirect('/');
          }
      });
  },

  editpage: function(req, res){
    Jedi.find({_id: req.params.id}, function(err, jedi){
      if(err){
        console.log(err);
      }
      console.log(jedi);
      res.render('edit.ejs', {citizen: jedi})
    });
  },

  updateinfo: function(req, res){
    Jedi.update({_id: req.params.id}, {
      name : req.body.name, 
      age: req.body.age,
      citizenship: req.body.citizenship,
      category: req.body.category, 
      educationalStage: req.body.educationalStage,
      council: req.body.council,
      weapon: req.body.weapon,
      criminalRecord: req.body.criminalRecord,
    }, function(err, jedis){
      res.redirect("/");
      });
  },

  destroy: function(req, res){
    Jedi.remove({_id: req.params.id}, function(err){
      console.log(req.params.id)
      if (err){console.log(err)};
      res.redirect("/")
    });
  }


}
