// loading necessary modules
var express = require('express');
var httpModule = require('http');
var bodyParser = require('body-parser');
// Load the module
const MongoClient = require('mongodb').MongoClient;
var modelTools = require('./models/dataTools.js');

var temp = new Array();

// Create an express app
var app = express();

var http = httpModule.Server(app);

// Tells app that pictures, etc are located in folder
// assets
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended:true}));

//set the view engine of the express app to ejs
app.set('view engine', 'ejs');

var members;
app.get('/team', (req, res) => {
  modelTools.readJsonFile('./models/data.json', (text) => {
    members = text;
    res.render('team.ejs', {data: members.participants}); // this data is the ul clss"data" in team.ejs
  });

});

// Get request to / is given to responder function
app.get('/', (req,res) => {
  // Sending a file to the user's browser
  res.sendFile(__dirname + '/test.html');
  // print message in the server side console
  console.log('got a GET request');
});

app.post('/people', (req,res) =>{
  console.log('Here is the request');
  var collection = myDB.collection('temp');

  collection.save(req.body, (err,result) => {
    if (err)
      return console.log(err);

    console.log("Saved data in Mlab");
    res.redirect('/');
  });
  //console.log(req.body);
  //temp.push(req.body)
  //console.log(temp);
  //res.redirect('/');
});

function portListener() {
    console.log('Listening on localhost ' + port);
};


var port = process.env.PORT ||  3000;

var myDB;
MongoClient.connect('mongodb://JackPolo56:Zrj20160112@ds113630.mlab.com:13630/worklog',(err,database) => {

  if(err)
    return console.log(err);

  myDB = database;
  http.listen(port, portListener);


});
