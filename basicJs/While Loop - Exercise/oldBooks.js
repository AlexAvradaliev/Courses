function oldBooks(input) {
    let index = 0;
    let nameBook = input[index];
    index++;
    let book = input[index];
    index++;
    let bookCounter = 0;
    let isFound = false;

    while (book !== "No More Books") {

        if (book === nameBook) {
            isFound = true;
            break;
        }
        bookCounter++;
        book = input[index];
        index++;
    }
    if (isFound) {
        console.log(`You checked ${bookCounter} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`)

    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
