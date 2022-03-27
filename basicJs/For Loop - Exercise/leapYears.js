function leapYears(input){
    let startYears = Number(input[0]);
    let endYears = Number(input[1]);
    
    for(let i = startYears; i <= endYears; i +=4){
        console.log(i)

    }
}
leapYears(["1908",
"1919"])