const heep = require("http");
const http = require("http");
http.createServer(function(req,res){
    var url = req.url;

        if(url === "/")
        {
            res.write("This is Home Page");
            res.end();
        }

        else if (url === "/first")
        {
            res.write("This is the first page");
            res.end();
        }

        else 
        {
            res.write("Error 404")
            res.end();
        }


}).listen(3000);