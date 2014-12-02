var express = require('express');
var app = express();

var port = 3000;
var ip = "127.0.0.1";

app.use(express.static(__dirname + '/../client'));

var server = app.listen(port, ip);

