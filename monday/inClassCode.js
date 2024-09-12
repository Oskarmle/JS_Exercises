import { Person } from "./person.js";

// functions and variables
let firstname = "Oskar";
const birthDate = new Date(1998, 3, 24);

console.log("My first name is", firstname);
console.log("My birthdate is", birthDate);

firstname = "John";
console.log("My first name is", firstname);

let numberOfCats = 2;
console.log("The number of cats is", numberOfCats);

function add(a, b) {
    return a + b;
}

const result = add(1, 3);
console.log("The result of a + b is", result);

// Objects, in JS {} is an object
let cat1 = {
    name: "Monty",
    color: "grey",
    gender: "male",
    getNameAndColor: function () {
        return this.name + " " + this.color;
    },
};
console.log(cat1);

cat1.species = "Maine coon";
// nested object inside another objects
cat1.adress = { street: "vejnavn 1", zip: "1234", city: "København" };
console.log(cat1);

console.log(cat1.getNameAndColor());

// Object destructuring
const person = { myFirstname: "Oskar", myLastname: "Eriksen" };
const { myFirstname, myLastname } = person;
console.log("My name is", myFirstname, myLastname);

// Classes
const person1 = new Person("John", "Cats");
person1.greet();

// Arrays
let students = ["patrick", "Kengo", "Lavi", "Thomas", 3, true, [], undefined];

students.push("Kai");
console.log(students);
console.log(students[0]);
let students2 = students.slice(2, 5);
console.log(students2);

students.push({ name: "Sofia", hobby: "roller skating" });
console.log(students);

console.log(students[9].hobby);

// User input
const box = document.getElementById("box");

box.addEventListener("click", function () {
    const backgroundColor = box.style.backgroundColor;

    if (backgroundColor === "red") {
        box.style.backgroundColor = "lightblue";
    } else {
        box.style.backgroundColor = "red";
    }
});

// If else statements
// let time = new Date().getHours();
let time = 20;
let greeting = "";

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "good day";
} else {
    greeting = "good night";
}

console.log(greeting);

const email = "oskar.eriksen@gmail.com";
const firstName = "Oskar";
const lastName = "Eriksen";

if (email === "oskar.eriksen@gmail.com" && firstName === "Oskar" || lastName === "Eriksen") {
    console.log("helloooo!");
}
