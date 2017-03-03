var express = require('express'); // 引入express
var bodyParser = require('body-parser'); // 引入body-parser

var app = express();

//json编码
app.use(bodyParser.json()); 

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.get('/formsubmit', function(req, res) {
	var response = {
		firstName: req.query.first_name,
		lastName: req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/postTest', function(req, res){
	console.log(req.body);
	var resBody = {
		getValue: req.body.value
	};
	res.end(JSON.stringify(resBody));
})

//监听8081接口打印请求域名和端口
var server = app.listen(8081, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例，访问地址为 http://%s:%s", host, port);

})