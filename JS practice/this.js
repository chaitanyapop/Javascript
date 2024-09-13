//console.log(this)// returning an empty object
function hello()
{
    let name='hello'
    const first_obj={
        name:'Chaitanya',
        list:[1,2,3,4,5],
        getName:()=>{
            console.log(this.name)
        }
    }
    //console.log(this)// it has returned an object
    first_obj.getName()
}
hello()

/*const abc=()=>{
    console.log(this)
}
abc()*/