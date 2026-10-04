const fs = require("fs")
function sizechecker(filename, limit){
    fs.stat(filename )
}
const fs=require('fs')

// function sizeChecker(filename) {
//     fs.stat(filename, (err, stats) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log("size of the file [" + filename + "]:", stats.size)
//     });
// }
 function sizeChecker(filename){
    const limit = 2*1024*1024 
    const stats = fstat.stat(filename)
if(stats.size > limit){
    console.log
}

 }