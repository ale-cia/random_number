var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('The Grid. A digital frontier..')
});

app.get('/tron', function(req, res){
    res.send('I tried to picture clusters of information')
    //Sends the above text that is received by the browser
});

app.get('/randomNumber', function(req, res){
  res.send(randomNumber(1, 10));
});

function randomNumber(min, max){
    var num = Math.floor(Math.random() * (1 + max - min) + min);
        return num.toString();
    };

randomNumber(3, 7);

app.listen(port, function(){
    console.log('listening on port', port);
})
