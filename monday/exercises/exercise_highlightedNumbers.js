// Get the container element
const numberList = document.getElementById("number-list")

// Loop through numbers from 1 to 20
for (let i = 1; i < 21; i++){
    // Create a new div element for each number
    // console.log(i);
    const newDiv = document.createElement("div")
    newDiv.textContent = i;
    document.getElementById("number-list").appendChild(newDiv)

    // Check if the number is even or odd and apply the appropriate class
    if (i % 2) {
        newDiv.classList.add("even")
    } else {
        newDiv.classList.add("odd")
    }
}
    // Add an event listener to highlight the number when clicked
    


        // Remove highlight from all numbers
        

        // Add highlight to the clicked number
    

    // Append the new div to the container

