/*let obj1={
    greetings: "good morning",
    name: ["chaitanya","chai","max"],
    greet()//creating function called 'greet'
    {
        this.name.forEach((i)=>{// i means this.name ka har ek element
            let greetings="hi";
            console.log(this)
            //console.log(this.greetings+" "+"hello"+" "+i)
            //console.log(greetings);
        })
       
    }
}
obj1.greet()
var greetings="good morning"
var obj1={
    greetings:"Hello",
    func_greet: function()
    {
        console.log(this.greetings)
        var a=()=>{
            console.log(this.greetings)
        }
        a()
    }
    
}
obj1.func_greet()*/
/*
1. This belongs to an object. "this.a" means the current this belongs to the global context or a window object. this.a means we are
defining a=6 in that global object */
// this.a=6
// console.log(this)

// function a()
// {
//     this.val="hello"
//     function b()
//     {
//         console.log(this.val)
//     }
//     b()
// }
// a()
// let obj={
//     a:10,
//     b:function()
//     {
//         function c()
//         {
//             console.log(this)
//         }
//         c()
        
//     }
// }
// obj.b()
// let employee = {
// 	eid: "E102",
// 	ename: "Jack",
// 	eaddress: "New York",
// 	salary: 50000
// }
// let {ename:name}=employee;
// name='atul';
// console.log(name);
// console.log(employee.ename);

// function person(name,age)
// {
//     this.name=name
//     this.age=age
// }

// person.prototype.hello=function ()
// {
//     console.log("hello")
// }
// person.prototype.world=function ()
// {
//     console.log("world")
// }
// console.log(person.prototype)

// let a=new person("chai","24")
// console.log(a.__proto__ === person.prototype)
// console.log(a)

class Person{
    constructor(name, age)
    {
        this.name=name,
        this.age=age
        console.log("here")
    }
    sayHello()
    {
        console.log("hello")
    }
    seyWorld()
    {
        console.log("world")
    }
}
let a=new Person("ca","b")
console.log(a)

// function createFunc(val1,val2)
// {
//     let person_obj=Object.create(null)
//     Object.setPrototypeOf(person_obj,Person.prototype)
//     console.log(person_obj)
//     person_obj.constructor.call(person_obj,val1,val2)
//     return person_obj
// }
// let a= createFunc("chaitanya","parandkar")
//console.log(a)

// let ab=new hello("hello")

// function hello(val)
// {
//     let newObj=Object.create(String.prototype)  
//     let stringObj=String.call(newObj,val)
//     newObj.valueOf=stringObj
//     return newObj
// }
// console.log(ab+"new")
let f={}
console.log(f)

// let seatChoice={}
// seatChoice["aisle"]="aisle"
// seatChoice[seatChoice["middle"]=3]="middle"
// console.log(seatChoice["middle"]=3)




