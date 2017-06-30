var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var path_result_map = {
	"/path1/aa":{"data":"hhh","status":1},
	"/path1":{"data":"aa","status":2},
	"/path2/aa/b":{"data":"bb","status":3},
	"/path2/a":{"data":"cc","status":4},
	"/path3/aa/cc":{"data":"dd","status":5}
}

app.all('/test/tt', function (req, res) {
  res.json({
	"data": "",
	"msg": "ok",
	"sec_level": 0,
	"status": 0
	});
});

for(var path in path_result_map){
	app.all(path, function(req,res){
		res.json(path_result_map[path]);
	})
}

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});