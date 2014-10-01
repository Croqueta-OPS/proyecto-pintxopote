var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('index.html');
});

app.get('/pintxokk', function(req, res){
	res.send('Hello World');
	res.send('Kakota')
});

app.get('/pintxokek', function(req, res){
	res.send('Hello World 2');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Listening on port 3000');
