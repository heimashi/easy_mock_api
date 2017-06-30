var express = require('express');
var reactViews = require('express-react-views');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
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

var url_json_list = {};

function is_valid_url(url) {
	if(url=="") return false;
	if(url.indexOf("/")!=0) return false;
	if(url.indexOf(" ")>0) return false;
	return true;
}

function is_valid_json(data) {
	if(data=="") return false;
	try{
		JSON.parse(data);
	}catch(e){
		return false;
	}
	return true;
}

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
    	if(index>0){
    		var url = item.substring(0,index);
    		var json = item.substring(index+1,item.length);
    		url_json_list[url]=json;
    		app.all(url, function(req,res){
				res.json(JSON.parse(json));
			})
    	}
    	
    })
    console.log(url_json_list);
});



app.post('/api/post', function(req, res, next){
	if(req.body.url_path==null||req.body.json_text==null){
		res.send("url and json can not be null");
		return
	};
	var url_path = req.body.url_path.trim().toLowerCase();
	var json_text = req.body.json_text.trim();
	if(!is_valid_url(url_path)){
		res.send("error url!\nurl: "+url_path);
		return
	}
	if(!is_valid_json(json_text)){
		res.send("error json!\njson: "+json_text);
		return
	}

	if(url_path in url_json_list){
		url_json_list[url_path]=json_text;
		//TODO

	}else{
		url_json_list[url_path]=json_text;
		fs.appendFile(__dirname + '/data/api.txt', "END\n"+url_path+" "+JSON.parse(json_text), function () {
		  	console.log('add success:'+req.body.url_path);
		});
	}
	
	app.all(url_path, function(req1,res1){
		res1.json(JSON.parse(json_text));
	})
	res.send("add success!\nurl: "+url_path);
});



var server = app.listen(3000, function () {
  console.log('app listening at post 3000');
});