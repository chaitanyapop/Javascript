// let a=10
// let b=30
// function no_IIFE()
// {
//     a=20;
// }
// no_IIFE()
// console.log(a);


// (function abc(){
//     b=10
//     console.log(b)
// }
// )(); 

// let new_func=(function(){
//     let a=10;
//     return function(){
//         console.log(a)// IIFE with closures
//     }
// })()
// new_func()

// let a=10
// if(true)
// {
//     let a=30
//     var b=20
//     console.log(a)
// }
// console.log(a,b)

(()=>{
let b=10;
console.log(b)
})()
console.log(b)