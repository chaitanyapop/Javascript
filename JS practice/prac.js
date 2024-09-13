
class One{
    first_func()
    {
        this.second_func()
    }
    second_func()
    {
       let c= 2+3
       
        console.log(c)
    }
}
let obj1= new One()
obj1.first_func()