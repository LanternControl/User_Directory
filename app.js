const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const data = require('./data.js');

const app = express();

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

// app.use('/User_Directory', express.static('User_Directory'));

app.get('/users', function(req, res){
 res.render('users', data)
});





app.listen(3000, function () {
  console.log('Successfully started express application!');
});
