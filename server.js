var bodyParser = require('body-parser');
const quoteroute = require("./routes/quotes"); 
var path = require('path');

var express = require('express');

var app = express();
var port = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/'));

 app.get(`/`, function(request, response){
    response.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.use("/api", quoteroute);

app.listen(port, function(){
     console.log('Express app listening on port ' + port);
 });