var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');// My data type
  res.send('YEAH!, Science'); // My Messege
});

var server = app.listen(8080, function() {
	console.log ('Listening on port 8080');
});