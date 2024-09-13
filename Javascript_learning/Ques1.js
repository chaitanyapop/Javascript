var a = 1;
// a()
// function a() {}

console.log(typeof a);

var b;
function b() {}
b = 1;
console.log(typeof b);

/*Here the output will be "number" in both the cases. The reason behind the number is, at the time of memory execution phase a and b 
both will get assigned as a function but in code execution phase a gets assigned with 1 and b also gets assigned with 1, which is a 
number therefore the output will be number */