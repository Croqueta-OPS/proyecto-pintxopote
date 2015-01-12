// config/database.js

var user = process.env.USER1;
var password = process.env.PASS1;

module.exports = {

	'url':'mongodb://'+user+':'+password+'@ds063879.mongolab.com:63879/croquetaops' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot

};