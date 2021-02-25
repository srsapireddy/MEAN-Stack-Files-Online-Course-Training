/*
// Storing Strings in Buffer
var buf = new Buffer.alloc(10);

buf.write("Hello"); // Should be less than 10 bytes

console.log(buf);  // Stores the values in the binary form
console.log(buf.toString("utf8"));
*/

// Taking the input from the parameter and allocate memory accordingly
// Allocating and initializing the buffer at the same time
// In buffers we store the values in the binary form
var buf = new Buffer.from("Hello This real world");

console.log(buf);
console.log(buf.toString("utf8"));

console.log(buf.toJSON()); // Representing the values as the object
