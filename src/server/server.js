import Express from 'express'
const app = Express();

// 设置跨域访问，方便开发
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// 具体接口设置
app.get('/api/test', function(req, res) {
    res.send({ code: 200, data: 'your data' });
});

var server = app.listen(1337, '127.0.0.1', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Mock server listening at http://%s:%s', host, port);
});
