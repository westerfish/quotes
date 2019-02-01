var bodyParser = require('body-parser');
const quoteroute = require("./routes/quotes");

var express = require('express');

var app = express();
var port = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

 app.get(`/`, function(request, response){
    response.send("Get request received at '/'");
});

app.use("/api", quoteroute);

app.listen(port, function(){
     console.log('Express app listening on port ' + port);
 });