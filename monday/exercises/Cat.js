// Exercise 1
// Create a Cat class with name, color, breed.

export class Cat {
    constructor(catname, color, breed){
        this.catname = catname;
        this.color = color;
        this.breed = breed;
    }
    test(){
        console.log("cat name is " + this.catname + " the color is " + this.color + " and is a " + this.breed);
    }
}