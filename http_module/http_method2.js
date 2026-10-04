const http = require('http');
const server= http.createServer((req,res)=>{

    // res.statusCode=200;
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end(JSON.stringify(require('./config.json')));
});

server.listen(5500, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:5500/');
});