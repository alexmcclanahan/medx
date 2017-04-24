var express = require('express');
var sql = require('mysql');
var app = express();

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

app.use('/', express.static('/NODE/MeDx'));
app.get('/check', function(req, res) {
        res.send(req.query.test)
});
app.get('/data', function(req, res) {
        connection.query('SELECT * FROM BCBS_FL', function(err, rows, fields){

         res.send(rows);
        });

});

app.get('/dataByTx', function(req, res) {
        if(req.query.tx){
            connection.query('SELECT * FROM BCBS_FL WHERE tx LIKE \'%' + req.query.tx + '%\'', function(err, rows, fields){
                res.send(rows);
            });
        }
        else{
            res.send(req.query.tx)
        }
});
app.get('*',function (req, res) {
        res.redirect('/index2.html');
});

app.listen(80);
console.log('api running');
