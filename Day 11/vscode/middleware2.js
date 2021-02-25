const express = require("express");
const app = express();
const port = 3000;
app.listen(port);

app.use("/", function(req,res,next){
    console.log("Yes this is middleware");
    next();
});

app.use("/", function(req,res,next){
    console.log("Yes this is middleware 2");
    next();
});

app.get("/", function(req,res){
    res.send("Hello we have Implemented Middleware")
});

app.use("/", function(req,res,next){
    console.log("Yes this is middleware 3");
    next();
});