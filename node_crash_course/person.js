class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
//module.exports = Person;
//Use this if Person class used in another file
//const Person = require('./person');

const person1 = new Person('Miguel Alvarado', 29);

person1.greting();
