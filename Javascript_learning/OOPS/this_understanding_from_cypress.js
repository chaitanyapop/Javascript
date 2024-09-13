function describe(func_main)
{
    func_main()
}

describe(function main(){
    function beforeEach(func1)
    {
        func1()
    }
    function it(func2)
    {
        func2()
    }
    beforeEach(function hello(){console.log(this)})
    it(function hello(){console.log(this)})
}
)