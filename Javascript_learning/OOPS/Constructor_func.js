function BankAccount(customerName, balance=0)
{
    this.name=customerName;
    this.accountNumber=Date.now()
    this.balance=balance
    this.creditAmount= function(amount){
        this.balance+=amount
    }
    this.debitAmount=(amount)=>{
        this.balance-=amount
    }       
}
let accounts=[]
let name=document.querySelector("#EnterName")

let balance=document.getElementById("Balance")

let account=document.getElementById("account_creation")

account.addEventListener("submit",(e)=>{

    e.preventDefault()
    let user_account=new BankAccount(name.value, balance.value)
    
    accounts.push(user_account)
    console.log(accounts)
})

let account_number=document.querySelector("#accountNumber")

let amount=document.getElementById("debit_amount")
let debit_form=document.getElementById("debit_ammount")
debit_form.addEventListener("submit",(e)=>{
  
    e.preventDefault()
    
    //console.log(typeof(account_number.value))
    let account=accounts.find((account)=>{
        return account.accountNumber=== +account_number.value
    })
    account.debitAmount(+amount.value)
    console.log(accounts)
})



// let first_account=new BankAccount("ABC", 1000)
// let second_account=new BankAccount("xyz")
// first_account.creditAmount(3000)
// second_account.debitAmount(500)
// console.log(second_account.balance)
