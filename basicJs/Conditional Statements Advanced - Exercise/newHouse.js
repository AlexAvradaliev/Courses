function newHouse(input){
    let type = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0
    let deff = 0

    switch(type){
        case "Roses":
            if(quantity > 80){
                sum = (quantity * 5.00) * 0.90
            }else{
                sum = quantity * 5.00
            }; break;
            
        case "Dahlias":
            if(quantity > 90){
                sum = (quantity * 3.80) * 0.85
            }else{
                sum = quantity * 3.80
            }; break;

        case "Tulips": 
        if(quantity > 80){
            sum = (quantity * 2.80) * 0.85
        }else{
            sum = quantity * 2.80
        }; break;

        case "Narcissus":
            if(quantity < 120){
                sum = (quantity * 3.00) * 1.15
            }else{
                sum = quantity * 3.00
            }; break;

        case "Gladiolus":
            if(quantity < 80){
                sum = (quantity * 2.50) * 1.20
            }else{
                sum = quantity * 2.50
            }; break;

    }
 if(budget >= sum){
     deff = Math.abs(budget - sum);
     console.log(`Hey, you have a great garden with ${quantity} ${type} and ${deff.toFixed(2)} leva left.
     `)
 }else{
    deff = Math.abs(budget - sum);
    console.log(`Not enough money, you need ${deff.toFixed(2)} leva more.`)
 }
}
newHouse(["Narcissus",
"119",
"360"])
