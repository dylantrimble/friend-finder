var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, 'public')));

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public'));
});

app.listen(PORT, function () {
  console.log('Listening on port: ' + PORT);
});