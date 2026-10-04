const fs = require("fs");  

Fs.writeFileSync("notes.txt", "ECE-A",(err) =>{
    if(err){
        console.log(err)
    }
    console.log("Data successfully written in the file notes.txt")
})
fs.readFile("notes.txt", (err, data) => {
     console.log(data);

     fs.appendFile("notes.txt", updateData, (err =>){
        if (err) {
            console.log(err)
            return;
        }
        console.log("Data successfully appended in the file notes.txt") 
     }