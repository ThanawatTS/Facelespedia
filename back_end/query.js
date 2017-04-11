var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'facelespedia'
});

connection.connect( function(err) {
    if(!!err) {
        console.log('Database Error');
    }else {
        console.log('Database Connected');
    }
}); 

exports.getPersons = function(callback){
  connection.query("SELECT * FROM Personss",function(err, results,fields){
    if(err) throw err;
    var data  = {
      person : results
    }
    callback(data);
  });
}

connection.end();