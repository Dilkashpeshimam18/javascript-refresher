class Human{
    constructor(g,a){
        this.gender=g
        this.age=a
    }

    printGender(){
        console.log(this.gender)
    }
    printAge(){
        console.log(this.age)
    }
}
class Person extends Human{
    constructor(g,a,n){
        super(g,a)
        this.name=n

    }
    print(){
        console.log(this.name)
        super.printGender()
    }
}

let person=new Person('male',18,'Max',)
person.printGender()
person.print()
person.printAge()