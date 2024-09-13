//const a="chaitanya"

//console.log(a)
//We cannot change the value of const as it is fixed
// function hello()
// {
//     const a="hello"
//     console.log(a)
// }
// console.log(a)
// hello()
// From the above example we can see that, if we define constant then it's value will not be able to change as we are getting an error.
// The scope of a "const" is to its particular block. In function, if we define that variable then it will print varible which is present
//inside the function

/********** let ****************/
// function letScoping() {
//     let x = 1;// present at diff mem location
  
//     if (true) {
//       let x = 2; //present at diff mem location
//       console.log(x); // will print 2
//     }
  
//     console.log(x); // will print 1
//   }
//   letScoping()
  /*In above example we can see that the scope of a 'let' keyword is particular to that block only. The 'let' defined inside the
  'if' condition has a block scope till that 'if' only. Therefore the 'x' variable defined inside function does not affect */



/********** var  ***********************/
// function varScoping() {
//     var x = 1;// present at mem location but if something is initialised with same name inside a funciton then it will point here
  
//     if (true) {
//       var x = 2;
//       console.log(x); // will print 2
//     }

  
//     console.log(x); // will print 2
//   }
//   varScoping()

  /*In the above example we can see that the 'var' keyword has functional scope i.e it is accessible throughout the function
  Inside the function we are again declaring the same variable therefore the original value of it will get affected */

 

