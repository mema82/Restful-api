var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');// My data type
  res.send('YEAH! Science'); // My Test Messege
  res.json(quotes.js); //Testing to send actual json file
});

/*
//Adding new route
app.get('/quote/random', function(req, res) { // new '/quote/random' - route added
  var id = Math.floor(Math.random() * quotes.length);//ability to retrirve random quote
  var q = quotes[id]; //grabbing quote
  res.json(q); //returning quote
});


//Adding ability to grab single quote
app.get('/quote/:id', function(req, res) { //Adding '/quote/:id' -route
  if(quotes.length <= req.params.id || req.params.id < 0) { //Id available by adding ":param"
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  
var q = quotes[req.params.id];
  res.json(q);
});
*/
var server = app.listen(8080, function() {
	console.log ('Listening on port 8080');
});
