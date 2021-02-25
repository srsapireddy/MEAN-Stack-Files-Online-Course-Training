// Sync
/*
const fs = require("fs");

var data = fs.readFileSync("myfile.txt");

console.log(data.toString());

console.log("End of Program");
*/

// Async
const fs = require("fs");

fs.readFile("myfile.txt", function(err, data) {
    if(err) return console.log("Error");

    console.log(data.toString());
});

console.log("End of Program");
