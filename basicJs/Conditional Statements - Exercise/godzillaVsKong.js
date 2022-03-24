function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let priceClothing = Number(input[2]);
    let price = 0

    if(statist > 150){
        price = budget * 0.10 + statist * priceClothing * 0.90;

    }else{
         price = budget * 0.10 + statist * priceClothing ;
    }

    if(budget >= price){
        console.log("Action!");
        console.log(`Wingard starts filming with ${Math.abs(budget - price).toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(budget - price).toFixed(2)} leva more.`)
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])