function volleyball(input){
    let year = input[0];
    let fete = Number(input[1]);
    let goTown = Number(input[2]);
    let week = 0;

    if(year === "normal"){
        week = (48 - goTown) * 3 / 4  + goTown + fete * 2 / 3;
        console.log(Math.floor(week));
    }else{
        week = (48 - goTown) * 3 / 4  + goTown + fete * 2 / 3;
        week = week + (week * 0.15)
        console.log(Math.floor(week));
    }

}
volleyball(["leap",
"2",
"3"])