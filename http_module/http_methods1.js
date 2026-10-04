import http from "http";
import fs from "fs";
const dom = fs.readFileSync('./config.json');
const server = http.createServer((req, res) => {
    console.log("Hello world")
    res.writeHead(200, { 'content-Type': 'application/json' });
    if (req.url === "/config") {
        res.end(dom);
    } else if (req.url === "/about") {
    else{
        res.end("okayyy")
    }
});
server.listen(3000, () => {
    console.log("server is live on 127.0.0.1:5500")
});
