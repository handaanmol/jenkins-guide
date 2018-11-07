'use strict';

const express = require('express');
const app = express();
var path    = require("path");

// Server connection
const PORT = 9000;
const HOST = '0.0.0.0';

// Application content
//const os = ['IST 615','Cloud Management','Prof. Radhika Garg','Advance Topic Presentation']

// Web Server
app.get('/test',function(req,res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

// Console output
app.listen(PORT, HOST);
console.log(`Running Anmol's App on http://${HOST}:${PORT}`);
