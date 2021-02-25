
// Dynamic Routing
const express = require("express")
const app = express();

const port = 3000;
app.listen(port);

app.get("/:id/:id2", function(req, res){
    res.send("This is the number you have entered in the URL " + req.params.id + req.params.id2);
});