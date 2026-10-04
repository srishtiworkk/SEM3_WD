const fs = require ("fs")
fs.writeFileSync("notes.txt","Hello node.js")

const data = fs.readFileSync("notes.txt")
console.log("read data : $(data)")

fs.appendFileSync("notes.txt","ECE-A")
fs.rmSync("notes.txt")
