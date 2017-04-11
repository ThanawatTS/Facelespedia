var fs = require('fs');
var PORT = 8080;
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json());
var query = require('./query.js');

exports.getPersons = function(callback){
  connection.query("SELECT * FROM Personss",function(err, results,fields){
    if(err) throw err;
    var data  = {
      person : results
    }
    callback(data);
  });
}

app.get('/', function(req,resp) {
    resp.sendFile('index.html',{root: path.join(__dirname,'../front_end')});
});

app.listen(PORT);

