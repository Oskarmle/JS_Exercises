// Classes
export class Person {
    constructor(firstname, hobby){
        this.firstname = firstname;
        this.hobby = hobby;
    }
    greet(){
        console.log("Hello, my name is " + this.firstname + " and i love " + this.hobby);
    }
}