import http form "http";

const server = http.createServer((req, res) => {
    console.log("Hello world")
    console.log(req.url)
    res.end("Hello_world")
    if (req.url === "/") {
        res.end("Hello world from the home page")
    } else if (req.url === "/about") {
        res.end("Hello world from the about page")
    }
      
}
