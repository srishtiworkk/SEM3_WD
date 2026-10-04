import fs from "fs"

// Readabe Streams 
const readableStream = fs.createReadStream("input.txt")

readableStream.on("data", (chunk) => {
    console.log("data Received");
        console.log("Data: ", chunk)
    })
    ReadStream.on("end",() =>{
        console.log("END")
    })

readStream.on("error", (error)=>{
    console.log("error:", error.message)
})

const writeStream = fs.createWriteStream("output.txt")
writeStream.write("Hello\n")