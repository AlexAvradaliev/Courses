function cinemaTickets(input) {

    let i = 0;
    let film = (input[i]);
    i++

    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;

    while (film !== "Finish") {
        let freePlaces = Number(input[i]);
        i++;
        let command = input[i];
        i++
        let counterTicked = 0;
        while (command !== "End") {
            let type = command;
            counterTicked++;
            switch(type) {
                case "student": studentCounter++; break;
                case "standard": standardCounter++; break;
                case "kid": kidCounter++; break;
            }
            if (freePlaces === counterTicked) {
                break;
            }
           
            command = input[i];
            i++;
        }
        console.log(`${film} - ${(counterTicked / freePlaces * 100).toFixed(2)}% full.`);
        film = input[i];
        i++;

    }
    let totalTicked = studentCounter + standardCounter + kidCounter;
    console.log(`Total tickets: ${totalTicked}`);
    console.log(`${(studentCounter / totalTicked * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalTicked * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTicked * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])