// Create an array of with the following values: 'Peter', 7, 'Marianne', true, 'Helle' and 8.Notice it is a mix of strings, numbers and a boolean.
// Use a loop to iterate over the array and generate the following in the console: "x" is a "what type of it is"

const items = ["Peter", 7, "Marianne", true, "Helle", 8];

// items.forEach(itemFunction)

// function itemFunction(i){
//     console.log(i + " is a " + typeof i)
// }

items.forEach(item => {
    console.log(item + " is a " + typeof item)
})

// DONE