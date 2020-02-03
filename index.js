var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send("It is working!!!");
})

app.listen(3000);