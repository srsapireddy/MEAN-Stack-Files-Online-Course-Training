const express = require("express");
const app = express();
const port = 3000;
app.listen(port);

app.use("/", function(req,res,next){
    console.log("Middleware A");
    next();
});

app.use("/", function(req,res,next){
    console.log("Middlewre B");
    next();
});

app.use("/", function(req,res,next){
    console.log("Middleware C");
    next();
});

app.get("/", function(req,res,next){
    res.send("Browers Text");
});


