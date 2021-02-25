/*
var os = require('os'); // created an object of class os..
// access all the functions of os class with this object
console.log(os.type());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
*/

/*
var path = require("path");
var f_path = path.resolve("main.js");
console.log(f_path);

var baseName = path.basename(f_path);
console.log(baseName);

var e_name = path.extname(baseName);
console.log(e_name);
*/

/*
var fs = require("fs");
fs.open("myfile.txt", "w", function(err){
    if(err) throw err;
    console.log("File Created");
})
// callback --> when the operation is completed this function will be called
*/

/*
var fs = require("fs");
fs.writeFile("myfile.txt", "we are learning NodeJS", function(err){
    if(err) throw err;
    console.log("We are able to write into file");
})
*/

var fs = require("fs");
fs.appendFile("myfile.txt", "\n hello", function(err){
    if(err) throw err;
    console.log("We are able to write into file");
})





