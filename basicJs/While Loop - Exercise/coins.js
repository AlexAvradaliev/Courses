function coins(input){
    let money = Number(input[0]);
    let coins = parseInt(money * 100);
    let coinsCounter = 0;

    while(coins >0){
        if(coins >= 200){
            coins -= 200;
            coinsCounter++
        } else if(coins >= 100){
            coins -= 100
            coinsCounter++
        }else if(coins >= 50){
            coins -= 50
            coinsCounter++
        }else if(coins >= 20){
            coins -= 20
            coinsCounter++
        }else if(coins >= 10){
            coins -= 10
            coinsCounter++
        }else if(coins >= 5){
            coins -= 5
            coinsCounter++
        }else if(coins >= 2){
            coins -= 2
            coinsCounter++
        }else if(coins >= 1){
            coins -= 1
            coinsCounter++
        }
    }
    console.log(coinsCounter)
}
coins(["2.73"])
