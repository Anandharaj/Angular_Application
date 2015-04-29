 var express = require('express')
var server = express()
server.use(express.json());


server.configure(function(){
  server.use('/', express.static(__dirname));  
});

server.get('#/main', function(req, res){
	res.redirect("/app/index.html")
});

server.listen(8000)
console.log('Server started at 8000')

