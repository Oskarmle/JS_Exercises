//////////////////////// EXERCISES: FUNCTIONS & OBJECTS

// Exercise 1
// Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. Check that it works and is printet correctly.
function fullname(firstname, lastname){
    return(firstname + " " + lastname)
}

console.log("My name is", fullname("Oskar", "Eriksen"))

// Exercise 2
// Create a function that calculates the area of a rectangle. The function should return the result. Test that it works.
function rectangle(sideA, sideB){
    return sideA * sideB
}
console.log("the area of the rectangle is", rectangle(4, 3))


// Exercise 3
// Create a function that takes speed and time as 2 parameters and calculates and returns the distance. Use the function to test that it works by using the 'log' again. Print out "You have travelled *x* km" where *x* is replaced by the result from the function.
function distanceFormula(speed, time){
    return speed * time
}
const distance = distanceFormula(70, 2)
console.log("You have travelled", distance, "km")

// Exercise 4
// Create an object called calculator with the name of the owner (eg. Your name) and modify your code so the 3 previousfunctions are attached to the object.
let calculator = {
    fullname: fullname, rectangle: rectangle, distanceFormula: distanceFormula
}

console.log(calculator.fullname("Oskar", "Eriksen"), calculator.rectangle(4, 3), distanceFormula(70, 3))

// Exercise 5
// Adjust your code so that you can call the functions and test that they still work.

// DONE