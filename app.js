const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const data = require('./data.js');

const app = express();


app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(__dirname + '/views'));

app.get('/users', function(req, res){
 res.render('users', data)
});





app.listen(3000, function () {
  console.log('Successfully started express application!');
});
