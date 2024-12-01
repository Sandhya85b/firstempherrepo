// Nested Objects and Traversal
// Create an object library that represents a library catalog. The object should have the following structure:

// name (string): Name of the library.
// location (string): Location of the library.
// books (array of objects): Each object in the array represents a book with the following properties:
// title (string)
// author (string)
// available (boolean)
// Perform the following tasks:

// Add at least 3 books to the books array.
// Use a loop to iterate through the books array and display the title and author of all available books.
// Add a method findBook to the library object that takes a book title as input and returns the corresponding book object.
// Test the findBook method by passing a title of a book that exists in the catalog.


let objectLibrary ={
    name: "Albert",
    location:"India",
    book:[{author:"welson",
        title:"wbcdef",
        available: true},
        {author:"aelson",
            title:"aabcdef",
            available: true},
            {author:"eelson",
                title:"ebcdef",
                available: false},
                {author:"felson",
                    title:"fbcdef",
                    available: true}]

}
objectLibrary.book.push({
    language:"English",
    title:"333",
    year:2021
})
console.log(objectLibrary)


let book={
    language:"English",
    title:"123",
    year:2023
}
let book1={
    language:"English",
    title:"222",
    year:2022
}
let book2={
    language:"English",
    title:"333",
    year:2021
}
