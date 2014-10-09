var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


// var routes = require('./routes/index');

app.get('/', function (req, res) {
	res.send('routes/index.html');
});

app.get('/pintxokk', function(req, res){
	res.send('Hello World');
	res.send('Kakota')
});

app.get('/pintxokek', function(req, res){
	res.send('Hello World 2');
});

// app.use('/', routes);

//app.listen(process.env.PORT || 3000);
//console.log('Listening on port 3000');
var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});