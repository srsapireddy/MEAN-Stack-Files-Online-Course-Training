const express = require("express");
const app = express();

const port = 3000;
app.listen(port);

app.get("/", function(req,res){
    res.send("Home Page")
});

app.get("/next_page", function(req,res){
    res.send("Next Page");
});

app.get("*", function(req,res){
    res.send("Default Page");
});