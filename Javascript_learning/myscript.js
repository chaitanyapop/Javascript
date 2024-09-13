// function hello()
// {
//     let a=10
//     let c=15
//     var e=100
//     function b()
//     {
//         let f=20
//         console.log(a)
//         console.log(c)
//     }
//     return b
// }

// hello()()
// console.log(e)

function a(store)
{
    return function b(action)
        {
            return function c(next)
                {
                   console.log(store) 
                }
        }
}
a("store")("action")("next")

// function hello(){
//     let a=10
//     var b=20
//     const c=30
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// hello()
//     console.log(a)
//     console.log(b)
//     console.log(c)
//....................Using IIFE..................................
// (function abc(){
//     let a=10;
//     return function(){
//         console.log(a)// IIFE with closures
//     }
// })()
// function hello()
// {
//     console.log("hd")
// }