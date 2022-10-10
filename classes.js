class Human{
    constructor(g){
        this.gender=g
    }

    printGender(){
        console.log(this.gender)
    }
}
class Person extends Human{
    constructor(g,n){
        super(g)
        this.name=n

    }
    print(){
        console.log(this.name)
        super.printGender()
    }
}

let person=new Person('male','Max')
person.printGender()
person.print()