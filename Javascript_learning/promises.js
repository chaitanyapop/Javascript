'Use Strict'
// let data= 3
// // setTimeout(()=>{
// //     console.log("Hello world")
// // },0)
// var promise_handler=promise_creater(data)
// promise_handler.then((data)=>{
//     console.log(data)
// })
// .then(()=>{
//     // this is a promise chain which will get executed when the above .then is executed
//     console.log("hello")
// })
// .catch((err)=>{
//     // In above two "then" if any error occurs then this .catch will execute
//     // Below this catch if we create some .then() then it will get executed
//     // We can create a global catch as well, which will get executed once any error occurs in above present .then
//     console.log(err)
// })
// console.log("hello 1")
// function promise_creater(data)
// {
//     return new Promise(function (resolve, reject)
//     {
//         if(data==3)
//         {
//             resolve(3)
//         }
//         else
//         {
//             reject("Some other value")
//         }
//     })
// }
// console.log("hello 2")
// function hello()
// {
//     console.log("hello I am here")
// }
// hello()
//...............................................................................//
// console.log("hello 1")
// function hello()
// {
//     setTimeout(()=>{
//         console.log("I am inside setTimeout")
//     },1000)
//     console.log("hello 3 ")
// }
// hello()

// console.log("hello 2")
//............................Async await....................................//
const p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise resolve value 1")
    }, 20000)
})
const p2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise resolve value 2")
    }, 40000)
})
async function handlePromise()
{
    console.log("Hello world")
    const val1=await p1
    console.log(val1)
    console.log("Hello 1")
 
    const val2=await p2
    console.log(val2)
    console.log("Hello 2")
}
handlePromise()
console.log("Check")
p1.then(function()
{
    function hello()
    {
        console.log(this)
    }
    hello()
})

let a= ()=>{
    let b= ()=>{
        let c= ()=>{
            console.log(this) //here o/p will be global object because it's scope will be 'a' scope and 'a' is surrounded in global obj
        }
        c()
    }
    b()
}
a()

function h(a,b)
{
    let c=()=>{
        console.log(this)
    }
    c()
}
h('hello',()=>{console.log(this)})
