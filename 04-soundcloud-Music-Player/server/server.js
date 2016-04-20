var express  = require('express');
var app      = express();                   // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var env = require('node-env-file');         //Environment variables for local development
var request = require('request');

env(__dirname + '/.env');
var SOUNDCLOUD_API_KEY = process.env.SOUNDCLOUD_API_KEY

var port = process.env.PORT || 3001;

// Middleware Configuration 

app.use(express.static(__dirname + '/../client'));              // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


//////////////////////////////////////////////////////////////////
//Set up request in order to avoid CORS issue with Soundcloud
//////////////////////////////////////////////////////////////////

app.get('/api/songs', function (req, next) {
  
  var options = {
    url: 'https://api.soundcloud.com/tracks?client_id=27cdfc113026bf6b14abbca4eade9d87'
    // append the user's handle to the url
  }

  request(options, function (err, body) {
    ourResponse.status(200).send(JSON.parse(body));
  });
});


app.listen(port);
console.log("App listening on port:" + port);


