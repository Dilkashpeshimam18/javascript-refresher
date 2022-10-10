//normal function vs arrow function

function printName(name){
    console.log(name)
}

const print=(name)=>{
    console.log(name)

}

printName('Bushra')

print('Max')

//if you have only parameter we can remove paranthesis
const print2=name=>{
    console.log(name)
}
print2('Harri')

const multiply=(num)=>{
    return num*2
}
console.log(multiply(2))
//if you have only one return statement then you can write it on one line

const sum=num=> num+2
console.log(sum(2))
