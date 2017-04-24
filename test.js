var sql = require('mysql');

var connection = sql.createConnection({
    host    : '104.196.17.163',
    user    : 'rick',
    password: 'gomocs',
    database: 'insdb'
})

connection.connect(function(err){
            if(!err){
                console.log("Connected to database!");
            }
            if(err){
                console.log("Cannot connect to database, error " + err);
            }
        })

connection.query('SELECT * FROM BCBS_FL', function(err, rows, fields){
  connection.end();
  console.log(rows);
});
