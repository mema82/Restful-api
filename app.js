var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');// My data type
  res.send('quotes.js'); // My Test Messege
  res.json(quotes); //Testing to send actual json file
});

//Adding new route
app.get('/quote/random', function(req, res) { // new '/quote/random' - route added
  var id = Math.floor(Math.random() * quotes.length);//ability to retrirve random quote
  var q = quotes[id]; //grabbing quote
  res.json(q); //returning quote
});


var server = app.listen(8080, function() {
	console.log ('Listening on port 8080');
});