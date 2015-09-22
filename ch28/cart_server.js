var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/mydb');
//attach lister to connected event
mongoose.connection.once('connected', function() {
    console.log("Connected to database")
});
require('./models/cart_model.js');
var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./cart_routes')(app);
app.listen(3000);

