const http = require("http")
const fs = require("fs");

http.createServer(function(req,res){

    var content = "";
    var reader = fs.createReadStream("myfile.txt");
    // The data read will be in binary format
    // Convert the data into UTF-8 format
    reader.setEncoding("utf8");

    // 3 Types of events might occur
    // Event Handling
    reader.on("error", function(err){
        if(err)
        console.log("error");
    });

    reader.on("data", function(data_chuck){
        content += data_chuck;
    });

    reader.on("end", function(){
        res.write(content);
        res.end();
    });

}).listen(5000);

