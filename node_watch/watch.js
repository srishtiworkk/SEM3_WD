const fs =  require('fs')

fs.watch("intro.txt",(eventType, filename) => {
    console.log("Event:", eventType)
    console.log("Filename:",filename)
}, 5000)
const watcher = fs.watch("intro.txt", (curr,prev) => {})