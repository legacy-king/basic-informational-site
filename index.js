const http = require('http');
const fs = require('fs')

http.createServer(function(req, res) {
    if(req.url === '/') {
        fs.readFile('index.html', 'utf8', (err, data) =>{
            res.end(data);
        } );
    } else if(req.url === '/about') {
        fs.readFile('about.html', 'utf8', (err, data) => {
            res.end(data);
        })
    } else if (req.url ==='/contact') {
        fs.readFile('contact.html', 'utf8', (err, data) => {
            res.end(data);
        })
    }
    
    else {
        res.writeHead(404);
        fs.readFile('404.html', 'utf8', (err, data) => {
            res.end(data)
        })
    }
}).listen(8080);