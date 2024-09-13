function func1()
{
    return new Promise((resolve,reject)=>{
        var c= 2+2
        if(c==5)
        {
            resolve("Answer is 4")
        }
        else{
            reject("Entered value is incorrect")
        }
    })
}

async function func2()
{
    try{
    var c= await func1() // AWAIT IS USED TO HANDLE THOSE FUNCTIONS WHO RETURN PROMISE
    /*If we do not use 'await' then func1() will return promise and we have to handle it in .then() and .catch() method
    if we use 'await' it says 'take a break here go execute other things once promise is resolved it will directly print what 
    is inside resolve() it will not require .then() and .cath() to handle it' */
    // TO HANDLE ERROR IN ASYNC AWAIT WE NEED TO USE 'TRY' AND 'CATCH' BLOCK
    //if we dont use await then its error i.e. reject() needs to get handeled in .catch() method.
    //if we use await then it will be handled by catch block

    /*c.then((value)=>{
        console.log(value)
    }).catch((err)=>{
        console.log(err)
    })*/
    console.log(c)
}
    catch (err){
        console.log(err) // in this error value inside reject will print
    }
    return 5;
}
console.log(func2().then((val)=>{console.log(val)})) // asynchronous function always resturns a promise