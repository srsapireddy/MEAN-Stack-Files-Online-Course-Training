const express = require("express");
const app = express();
const port = 3000;
app.listen(port);

app.get("/", function(req,res){
    res.send("Hello we are goint to Implement Middleware")
});
