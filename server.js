var express = require('express');

var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.json());
require('./routes/server_routes.js')(app);

app.set('port', 3000);

app.listen(app.get('port'), function() {
  console.log('server is running on port', app.get('port'));
});
