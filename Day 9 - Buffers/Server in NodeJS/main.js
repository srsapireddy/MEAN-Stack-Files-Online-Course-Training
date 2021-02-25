/*
const http = require("http");

const server = http.createServer(function(req,res){
    console.log("Server Running")
    // for accepring the request
    // res for responding to the browser
}).listen(3000);
*/

// Sending message to the browser
const http = require("http");
const server = http.createServer(function(req,res){
    res.end("This is my First Message in Browser")
}).listen(5000);

