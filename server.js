var express = require('express');
var app = express();

app.use(require('./controllers'));
app.use(express.static('client/build'));

app.listen(3000, function(){
  console.log("The Animal Farm is running! on port" + this.address().port);
})