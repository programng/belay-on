var express = require('express');
var app = express();

var port = 3000;
var ip = "127.0.0.1";

var cors = require('cors');

app.use(cors());

var server = app.listen(port, ip);