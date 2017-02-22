var express = require('express'); // source express node module (framework)
var app = express(); //declare express as app variable, allowing us to use its built-in functions
var bodyParser = require('body-parser'); //body-parser extracts info from incoming request and makes it available to use nicely

app.use(express.static('public')); // everytime a request comes in, look at public (index-> jquery -> client.js)

app.use(bodyParser.urlencoded({extended: true})); // on every request, we get a hold of data we created

var songList = [
  {
    title: 'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Phire',
    artist: 'Johnny Cash'
  }
];

app.get('/songs', function(req, res) { // request looking for songs
  res.send(songList); // send back songlist array of objects
});

app.post('/newSong', function(req, res){ // if we are
  var newSong = req.body; // 
  if(newSong.artist !== "Justin Bieber"){
    songList.push(newSong); // add newsong to array
    console.log(songList);
    res.sendStatus(200); //respond with success code
  } else {
    res.sendStatus(500);
  }
});

app.listen(3000);
