let number=[1,2,3,4]
let newNumbers=[...number,5,6]
console.log(newNumbers)

const person={
    name:'Dilkash'
}
const name={...person, surname:'Peshimam'}
console.log(name)

const print=(...arg)=>{
    return arg.filter(ele=>ele==1)
}
console.log(print(1,2,1,3))