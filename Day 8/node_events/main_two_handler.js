const eventEmitter = require("events"); // returns class

var emitter = new eventEmitter();

// defining handler
var myHandler1 = function() {
    console.log("I am inside the Event and I am in Handler 1");
}

var myHandler2 = function(){
    console.log("I am inside the Event and I am in Handler 2");
}

emitter.on("Event1", myHandler1); // Creating Event1 and assigning an handler

emitter.addListener("Event1", myHandler2);

emitter.emit("Event1"); // Starting Event1

emitter.removeListener("Event1", myHandler1);

emitter.emit("Event1"); // Starting Event1


