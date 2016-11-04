var express = require('express');
var path = require('path')
var app = express();
var port = 80;

//app.set('views',path.join(__dirname, 'views'));

//app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static('views'));

function getHomePage(req,res){
	
	res.redirect('/index.html');
	
}

app.get('/', getHomePage);
app.get('/hello',function(req,res) {
    res.redirect('/hello.html');
});

var server = app.listen(port,function(){
	console.log('Express is running on port %d.', port);
});