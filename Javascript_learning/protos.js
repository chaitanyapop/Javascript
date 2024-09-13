// function helo()
// {
//     console.log("hello")
// }
// helo()

let obj={
    name:"chaitanya",
    lastName:"Parandkar"
}

function printName()
{
    console.log(this.name +" "+ this.lastName)
}

Function.prototype.mybind=function(data){
    console.log(data)
    return function()
    {
        this.printName.apply(data)
    }
}

let printName2=printName.mybind(obj)
console.log(printName2())

