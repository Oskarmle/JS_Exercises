// Create an array of book objects, with title and author (where both are strings). Create 5 objects in the array.
// Create an HTML page with a <ul>.
// Write javascript that loops over the array of book objects and create a new <li> for each book object and addthe title and author to the <li> and insert it into the <ul>.
// Verify that it works with any number of objects by removing 2 of the 5 objects from the array and run it again.

import Book from "./Book.js";

const books = [
    { title: "book1", author: "person1" },
    { title: "book2", author: "person2" },
    { title: "book3", author: "person3" },
];

const books2 = [
    new Book("book1", "person1"),
    new Book("book2", "person2"),
    new Book("book3", "person3"),
    new Book("book4", "person4"),
    new Book("book5", "person5"),
];

books2.forEach((x) => {
    const bookObject = `${x.title} written by ${x.author}`;
    const newLi = document.createElement("li");
    newLi.textContent = bookObject;
    document.getElementById("bookList").appendChild(newLi);
});

// DONE