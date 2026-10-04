import http from "http"
const server = http.createServer((req, res) => {
    console.log("Hello world")
})

server.listen(3000,"127.0.0.1" () => {
    console.log("server is running...")
})