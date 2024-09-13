class user{
    static username
    static{
        console.log("hello world")
    }/*this is called as static block. Whenever any user calls a static method the static block will execute automatically
    static block does not need any invocation it executes automatically  */
    static printName(name)
    {
        user.username=name
        console.log(user.username)
    }
}
user.printName("chaitanya")
/*Static methods and properties can be accessed through "classname.property/method"
static methods or properties cannot be accessed through class instances
 These static methods can be called without creating an instance of a class*/