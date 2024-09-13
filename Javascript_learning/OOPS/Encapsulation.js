class BankAccount{
    #amount
    constructor(name, amount=0)
    {
        this.name=name
        this.#amount=amount
        this.accountNumber=Date.now()
    }
    get balance()
    {
        return this.#amount
    }
    set balance([amount,type])
    {
        if(amount===NaN)
        {
            
            throw Error("Value is invalid")
        }
        else
        {
            if(type=="credit")
            {
                this.#amount+=amount
            }
            else
            {
                this.#amount-=amount 
            }
            
        }
    }
}
class currentAccount extends BankAccount
{
    constructor(name, amount)
    {
        super(name, amount)
    }
    #calculateInterest(value)
    {
        if(value>10000)
        {
            return 12
        }
        else
        {
            return 10
        }
    }
    loanAmount()
    {
        let value=this.balance
        let interest= this.#calculateInterest(value)
        return interest
    }
    credit(credit_amount)
    {
        this.balance= [credit_amount,"credit"]
        return this.balance

        
    }
    deposit(deposit_amount)
    {
        this.balance=[deposit_amount,"deposit"]
        return this.balance
    }
}
let user_b=new currentAccount("xyz",5000)
//user_b.#amount=10 // this will give an error as #amount is a private variable
console.log(user_b.credit.call(user_b, 2000))
console.log(user_b.deposit.call(user_b,1000))
console.log(user_b.loanAmount.call(user_b))

