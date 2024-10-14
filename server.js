var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello, world!')
});

/* Use PORT environment variable */
var port = process.env.PORT || 5000;
server = app.listen(port, function () {
  console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
});
