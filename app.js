var express = require('express');
var app = express();
var reactViews = require('express-react-views');
var bodyParser = require('body-parser');
var fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res, next) {
  res.render('index', { title:'admin',msg: "user name"});
});

app.get('/api', function (req, res, next) {
  res.render('api_post', { title:'API POST',msg: "user name"});
});

app.get('/api/list', function (req, res, next) {
  res.render('api_list', { title:'API POST',msg: "user name"});
});

app.post('/api/post', function(req, res, next){
	fs.appendFile(__dirname + '/data/api.txt', "END\n"+req.body.url_path+" "+req.body.json_text, function () {
  		console.log('add success');
	});
	app.all(req.body.url_path, function(req1,res1){
		res1.json(JSON.parse(req.body.json_text));
	})
	res.send("success! url:"+req.body.url_path);
});

fs.readFile(__dirname + '/data/api.txt', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
    if(err) {
     console.error(err);
     return;
    }
    console.log(data);
    var reg = "END\n";
    var api_array = data.split(reg);
    api_array.map(function(item){
    	var index = item.indexOf(" {");
    	var url = item.substring(0,index);
    	var json = item.substring(index+1,item.length);
    	console.log("url:"+url+" json:"+json);
    	app.all(url, function(req,res){
			res.json(JSON.parse(json));
		})
    })
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
  console.log('app listening at post 3000');
});