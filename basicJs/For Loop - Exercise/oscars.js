function oscars(input) {
    let s = 0;
    let name = input[s];
    s++;
    let pointsAcademy = Number(input[s]);
    s++;
    let quantite = Number(input[s]);
    s++;
    let nameQua = input[s];
    s++;
    let pointsQua = Number(input[s]);
    s++;

    for (let i = 0; i < quantite; i++) {
        if(pointsAcademy >= 1250.5){
            break;
        }
        let nameToPoints = nameQua.length;
        pointsAcademy += ((nameToPoints * pointsQua) / 2);
        nameQua = input[s];
        s++;
        pointsQua = Number(input[s]);
        s++;


    }
    if(pointsAcademy >= 1250.5){
        console.log(`Congratulations, ${name} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - pointsAcademy).toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

