function fishingBoat(input){
    let sum = Number(input[0]);
    let season = input[1];
    let countFisher = Number(input[2]);
    let money = 0;

    switch(season){
        case "Spring": money = 3000; break;
        case "Summer":
        case "Autumn": money = 4200; break;
        case "Winter": money = 2600; break;

    }
    if(countFisher <= 6){
        money *= 0.90
    }else if(countFisher <= 11){
        money *= 0.85
    }else if(countFisher >= 12){
        money *= 0.75
    }
    if( countFisher % 2 === 0 && season !== "Autumn"){
        money *= 0.95
    }
    if(sum >= money){
        console.log(`Yes! You have ${Math.abs(sum - money).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${Math.abs(sum - money).toFixed(2)} leva.`)
    }
}
fishingBoat(["2000",
"Winter",
"13"])
