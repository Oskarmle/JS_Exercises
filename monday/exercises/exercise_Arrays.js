//////////////////////// EXERCISE: ARRAYS
// Exercise 1
// Create an array with 5 names. Print out the first element (name) using console.log()
let people = ["Oskar", "Karen", "Mogens", "Simon", "Tom"]
console.log(people[0]);

// Exercise 2
// Use the indexOf function to get the index of a name that exists in your array.
console.log(people.indexOf("Karen"));

// Exercise 3
// Try the indexOf function with a namethat does not exist. What is returned?
console.log((people.indexOf("Sophie")));

// Exercise 4
// Use the push function to add a new nameto the array of names, so you have 6 namesin the array. 'log' the array to verify.
people.push("Jette")
console.log(people);

// Exercise 5
// Use the slice function on the array, to create a new array with the first 3 names. 'log' the array to verify.
const people2 = people.slice(0, 3)
console.log(people2);

// Exercise 6
// Create 2 objects with firstname, lastname, email– values.
// Add the two objects to a new array. 'log' the array to verify.
// Also 'log' the first objects' email in a separate 'log'.
let person1 = {
    firstname: "Sophie",
    lastname: "Have", 
    email: "Sophie.have@gmail.com"
}

let person2 = {
    firstname: "Oskar",
    lastname: "Eriksen", 
    email: "oskar.eriksen@gmail.com"
}

let persons = [person1, person2]
console.log(persons)

console.log(persons[1].email);

