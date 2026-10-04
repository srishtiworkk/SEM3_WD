//import http from "http"
const http =require ("http")
const server=CreatServer((req,res))=>
console.log("server is created")
res.writeHead(200,{'content-Type': 'application/json',
    'custom-Header': 'Srishti'
    'accept-charset': 'utf-8';
    
    
res.end("welcome from server")
})
server.listen("3000,()=>
console.log('Srishti')
})
res.status(200);
res.SetHeader('content-Type', 'text/html');

