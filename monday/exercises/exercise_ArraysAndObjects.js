//////////////////////// EXERCISE ARRAYS & OBJECTS
// Exercise 1
// Define a Student object with properties: name, id, and grades (an array of numbers).
let studentOskar = {
    firstname: "Oskar", 
    lastname: "Eriksen", 
    id: "2937476",
    grades: [7, 7, 4, 10, 12, 12]
}

// Exercise 2
// Write a function named addGrade that takes a Student object and a grade (number) as parameters, and adds the grade to the student's grades array.
function addGrade(studentOskar, grade){
    studentOskar.grades.push(grade)
}

addGrade(studentOskar, 10)

console.log(studentOskar.grades);

// Exercise 3
// Write a function named updateStudentName that takes a Student object and a new name as parameters and updates the student's name.
function updateStudentsName(studentOskar, newName){
    studentOskar.firstname = newName
}

updateStudentsName(studentOskar, "Sophie")
console.log(studentOskar);

// Exercise 4
// Create a student object.
// Add a few grades to the student.
// Update the student's name and print the updated object.