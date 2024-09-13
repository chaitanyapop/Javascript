
 
// In "this" it contains different value according to its position.
/*
1) When we put this outside a function then it returns an empty object and if we same try to do in browser then it returns us
a window object which has multiple functions which we use for DOM manipulation.
 */
console.log(this)
/*2) When we put this inside a function then it returns an object which has some functions present.*/
function my_func()
{
    console.log(this)
}
my_func()

/*3) When we use an object and inside that object we declare a function and inside it if we use "this" then it's scope will be that
particular object and if we print "this" then it will return the key:value parameters mentioned in that object.*/
const obj1={
    name:'Chaitanya',
    getName:function()
    {
        var name='Abc'
        console.log(this.name)
        console.log(this) // its context will be a whole obj1 object therfore it will refer to the "name:chaitanya" not the name present
        // in function 'name=Abc"
    }
}
obj1.getName()

/*4) We cannot use "this" inside the arrow function. Why ?
The reason is, when we print "this" inside an arrow function it returns an empty object to us and it does not contain values
therefore we cannot use this inside arrow function*/

const my_func1=()=>{
    console.log(this)// because of returned empty object we cannot use this inside arrow function
}
my_func1();

var length = 4;
function callback() {
  var length=5
  console.log(this.length); // What is logged?
}
callback()
////////////////////////////////////////////////////
var greetings="good morning"
var obj2={
    greetings:"Hello",
    func_greet: function()
    {
        let greetings="new"
        console.log(this.greetings)// In normal function the scope of this is its parent
        var a=()=>{
            console.log(this.greetings) // In arrow function the lexica scope of this is, parent of its parent
        }
        a()
    }
    
}
obj2.func_greet()


/*console.log(this)// here it refers to an empty object. If we execute the same then it will return us a window object. This
// window object is a default global object in browser. In node environment there is nothing in global environment therefore
// it returns empty object
*/

