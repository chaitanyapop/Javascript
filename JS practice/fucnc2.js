const a={
    func1: function hello(a, func){console.log("hello word")}
}
a.func1("hello",()=>{console.log("hello")})
console.log(a)
module.export=a