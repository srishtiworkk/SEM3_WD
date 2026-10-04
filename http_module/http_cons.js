const http = require("http")

const server = http.createServer((req,res)=>{
    if (req.method === "get"&& req.url === "/"){
        res.end("GET Request")
    }else if (req.method === "POST"&&req.url==="/"){
        res.end("POST Request")
    }else if (req.method === "PATCH"&&req.url==="/users"){
        res.end("PATCH Request")
    }
})
server.listen (3000,(res,res)=>{
    console.log("Server is running on the PORT:3000");

})