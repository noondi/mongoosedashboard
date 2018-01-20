var express = require('express');
var path = require('path');
var port = 8000;
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));

app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)



app.listen(port, function() {
    console.log("Report REVIEWING YOUR WORK!!!");
});
