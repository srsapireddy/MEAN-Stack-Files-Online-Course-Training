const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

console.log("Hello I am running")

app.use("/", function(req,res,next){
    next();
})

app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/test.html");
})

app.listen(port);