// Create a function, findLargest, that takes 4 numbers as 4 parameters and returns the largest of the 4 numbers.
const largest = (number1, number2, number3, number4) => {
    return Math.max(number1, number2, number3, number4)
}

console.log(largest(19,5,30,4));

// Create a function that takes 3 numbers as 3 parameters.
// The first parameter is the number to check.
// The 2nd and 3rd parameter is a range (from and to).
// If the first parameter is within the range of the range it should return true and false if not.

const numberInRange = (number1, number2, number3) => {
    if (number1 >= number2 && number1 <= number3) {
        return true
    } else if (number1 < number2 || number1 > number3){
        return false
    }
}

console.log(numberInRange(3, 4, 6));
