var express = require('express');
var app = express();
//var router = express.Router();

app.set('views', __dirname);
//app.set('view engine', 'html');

app.use(express.static(__dirname));

//Get home page
app.get('/', function(req, res)
{
  res.render('./index.html');
});

app.listen(80);
//module.exports = router;
