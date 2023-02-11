// var http = require('http'); // 1 - Import Node.js core module

// var server = http.createServer(function (req, res) {   // 2 - creating server
//     var fs = require('fs');

//     if (req.url == '/') { //check the URL of the current request
        
//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         // set response content    
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
    
//     }

// });

// server.listen(5000); //3 - listen for any incoming requests

// console.log('Legendary server online..')

const express = require('express');
const server = express();
var path = require('path')

server.use(express.static(__dirname));
server.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(5000); //3 - listen for any incoming requests

console.log('Legendary server online..')
