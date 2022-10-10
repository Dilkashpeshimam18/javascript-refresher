class Human{
    gender='male'
    printGender(){
        console.log(this.gender)
    }
}
class Person extends Human{
    name='Samira'
     
}

let person=new Person()
person.printGender()
console.log(person.name)