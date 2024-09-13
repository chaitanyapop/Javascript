let name={
    firstName:"Chaitanya",
    lastName:"Parandkar"
}
function printName(city, state, country)
{
    console.log(this.firstName + " "+this.lastName+" "+city+" "+state +" "+country)
}
//printName.call(name,"Mumbai","Maharashtra")
//printName.apply(name,["mumbai","Maharashtra"])
// let func_name=printName.bind(name,"mumbai","maharashtra")
// func_name()

//In pollyfill for bind we have to create our own bind method
Function.prototype.myBind=function(...args)
{
    let values=args.slice(1)
    console.log(values)
    return function(...val)
    {
        printName.apply(args[0],values.concat(val))
    }
}
let func_name=printName.myBind(name,"Mumbai")
func_name("Mah","dub")