var http = require('http');
var fs = require('fs');
var port = 3000;
var server = http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
    });
});
server.listen(port, function () {
    console.log("Server running");
});
