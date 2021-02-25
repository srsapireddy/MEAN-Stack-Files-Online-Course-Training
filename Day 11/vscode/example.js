
// Dynamic Routing
const express = require("express")
const app = express();

const port = 3000;
app.listen(port);

app.get("/:id", function(req, res){
    if(req.params.id == 123){
    res.send("Hello World");
    }

    else if(req.params.id == 456){
        res.send("How are you?");
        }
    
        else
        {
            res.send("Bye")
        }
});

