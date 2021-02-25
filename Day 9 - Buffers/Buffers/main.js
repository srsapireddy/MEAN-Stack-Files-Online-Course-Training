// Creating a object of class buffer. In actual buffer is an array
var buf = new Buffer.alloc(10);

for(i=0;i<=10;i++){
    buf[i] = i + 97;
}

console.log(buf.toString("ascii"));

/*
# ASCII --> LIMITED 52 CHARACTERS
# UTF - 8 -->  256
# UTF - 16 --> 65565
# UTF - 32
*/ 

console.log(buf.toString("ascii",0,5))

// In UTF
console.log(buf.toString("UTF8"));
console.log(buf.toString("UTF8",0,5));
console.log(buf.toString(undefined,0,5)); // undefined == UTF