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
class SalaryAccount extends BankAccount
{
    constructor(account_name,name,amount)
    {
        super(name, amount)
        this.account_name=account_name
    }
    print_account_name()
    {
        console.log(this.account_name, this.amount)

    }
}
class SavingAccount extends BankAccount
{
    constructor(account_name, name, amount)
    {
        super(name,amount)
        this.account_name=account_name
    }
    take_loan(amount)
    {
        console.log("take a personal loan "+amount+" "+name)
    }
}
let account_A=new SalaryAccount("Salary account","chaitanya",10000)
console.log(account_A)
let account_B=new SavingAccount("Saving account","abc",1000)
console.log(account_B)