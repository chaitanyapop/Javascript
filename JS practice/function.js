function add(a=0,b=0) // here a=0, b=0 is defined as a default value so if we do not pass any argument it will take default values
{
    return a+b;
}
function hello()
{
        function add(a,b)
        {
            console.log(a+b);
        }
        function sub(a,b)
        {
            console.log(a-b);
        }
        return {add, sub};
}
var a=10;
var b=20;
console.log(add(a,b))
const [m,c]=[10,14]//making list of constants and storing its individual values in it in the form of array.
//each variable will map into its corresponding variable
console.log(m,c)
const val=hello();
console.log(val);
val.add(10,5);// this is how express() function works