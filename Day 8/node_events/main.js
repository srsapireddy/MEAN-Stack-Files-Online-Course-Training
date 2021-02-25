const eventEmitter = require("events"); // returns class

var emitter = new eventEmitter();

// defining handler
var myHandler = function() {
    console.log("I am inside the Event and I am handling it properly");
}

emitter.on("Event1", myHandler); // Creating Event1 and assigning an handler
emitter.emit("Event1"); // Starting Event1


