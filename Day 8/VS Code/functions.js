/*
var test = 100;
var pass;

function display(pass)
{
    console.log("Hello World");
    console.log("Value of pass:= " + pass);
}

display(test);

// -------------------------------------------

var arr = [100,200,300]

function display_2(obj)
{
    console.log("Hello World");
    console.log(obj);
    console.log(obj[0]);
}

display_2(arr);

// -----------------------
*/
var obj = {
    
    Name: "Rahul",
    Age: 26,
    Place: "Telangana"
}

console.log(obj.Name);
console.log(obj.Age);
console.log(obj.Place);
console.log(obj);

function display(test)
{
    console.log(test)

    console.log(test.Age);
    console.log(test.Name);
    console.log(test.Place);
}

display(obj);