var express = require('express');
var app = express();



app.get('/', function (req,res) {
    console.log("There is a GET request for the homepage!");
    res.send('Here is the GET method');
})

app.post('/', function (req,res) {
    console.log("A POST request for the homepage is accessed");
    res.send('Here is the POST method');
})

app.get('/list_user', function (req,res) {
    console.log("Got a Get request for /list_user");
    res.send('This is Page listing');
})

app.get('/ab*cd', function (req,res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Match Page');
})

var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

//Enrico