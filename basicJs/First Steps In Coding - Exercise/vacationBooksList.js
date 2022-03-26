function vacationBooksList(input){
    let page = Number(input[0]);
    let pageForH = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = page / pageForH
    let TimeDay = totalTime / days
    console.log(TimeDay)
}
vacationBooksList(["212 ",
"20 ",
"2 "])