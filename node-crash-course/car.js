class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greetings() {
        console.log(`My name is: ${this.name}. I am ${this.age} years old.`)
    }
}

module.exports = Person