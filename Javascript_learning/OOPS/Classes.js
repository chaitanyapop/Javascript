class BankAccount{
    constructor(name, amount=0)
    {
        this.name=name
        this.amount=amount
        this.accountNumber=Date.now()
    }
    credit(credit_amount)
    {
        this.amount+=credit_amount
    }
    deposit(deposit_amount)
    {
        this.amount+=deposit_amount
    }
}
var account_A=new BankAccount("abc",1000)
let account_B=new BankAccount("xyz")
console.log(account_A)
console.log(account_B)
