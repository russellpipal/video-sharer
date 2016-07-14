var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/', index);

// Start server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port, 'Press ctrl+C to exit');
});
