const fs = require("fs")
fs.stat("notes.txt", (err, stats) =>(

    if (err){
        console.log(err);
        return
    }
    console.log("information about (notes.txt", typeof(stats))
    console.log ("size of the file (notes.txt)", stats.size)
    console.log("creation time of the file (notes.txt)", stats.mtime.toISOstring)
})
