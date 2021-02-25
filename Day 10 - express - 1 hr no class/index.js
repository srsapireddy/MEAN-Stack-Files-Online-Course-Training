/*
// Creating Server
const express = require("express");
const app = express() // Creating express of express module. app --> object of express module
const port = 3000;
app.listen(port);

app.get("/", function(req,res){
    res.send("This is my first server in express")
})
*/

// ROUTING
const express = require("express");
const app = express();

const port = 3000;
app.listen(port);

app.get("/", function(req, res){
    res.send("I am in home page");
});

app.get("/first", function(req,res){
    res.send("I am at first page");
});

app.get("/first/second", function(req,res){
    res.send("I am in second page");
});


// default
app.get("*", function(req,res){
    res.send("This page does not exist error 404");
});



