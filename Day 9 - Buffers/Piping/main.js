const fs = require("fs");

var readStream = fs.createReadStream("mytext.txt");
 
var writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
console.log("Please see the contents of output.txt")
