var express = require('express');
var app = express();

var https = false;
var port = 8080;

function Listen(https, port = 80) {
    if (https) {
        var fs = require('fs');
        var https = require('https');
        var privateKey  = fs.readFileSync('./ssl/private.key', 'utf8');
        var certificate = fs.readFileSync('./ssl/public.cert', 'utf8');
        var credentials = {key: privateKey, cert: certificate};
        var httpsServer = https.createServer(credentials, app);
        if (port == 80) {
            httpsServer.listen(443);
            console.log(`HTTPS | Currently listening on port 443`)
        } else {
            httpsServer.listen(port);
            console.log(`HTTPS | Currently listening on port ${port}`)
        }
    } else {
        var http = require('http');
        var httpServer = http.createServer(app);
        if (port == 80) {
            httpServer.listen(80);
            console.log('HTTP | Currently listening on port 80');
        } else {
            httpServer.listen(port);
            console.log(`HTTP | Currently listening on port ${port}`)
        }
    }
}
Listen(https, port);