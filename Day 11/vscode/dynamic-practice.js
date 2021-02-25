const express = require("express");
const app = express();
const port = 3000;
app.listen(port);

app.get('/:id1', function(req,res){
    if (req.params.id1 = 123){
    res.send("The id is 123");
    }
});