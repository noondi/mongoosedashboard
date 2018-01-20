var dashboard = require('../controllers/usercontroller.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    dashboard.showAll(req, res)
  });
  app.get('/jedis/new', function(req, res) {
    res.render("create.ejs")
  });
  app.get('/jedis/:id', function(req, res) {
    dashboard.showOne(req, res)
  });
  app.post('/jedis', function (req, res){
    dashboard.createnew(req, res)
  });
  app.get('/jedis/edit/:id', function(req, res) {
    dashboard.editpage(req, res)
  });
  app.post('/jedis/:id', function (req, res){
    dashboard.updateinfo(req, res)
  });
  app.post('/jedis/destroy/:id', function (req, res){
    dashboard.destroy(req, res)
  });
  
}
