function cleverLily(input){
    let age = Number(input[0]);
    let priceMachine = Number(input[1]);
    let pricetoys = Number(input[2]);
    let toys = 0;
    let money =0;
    let nextMoney = 10;

    for(let i = 1; i <= age; i++){

        if(i % 2 !== 0){
            toys++
        }else{
            money += nextMoney;
            nextMoney += 10;
            money--;   
        }
    }
    let totalMoney = toys * pricetoys + money;
    if(totalMoney >= priceMachine){
        console.log(`Yes! ${Math.abs(totalMoney - priceMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(totalMoney - priceMachine).toFixed(2)}`);
    }
}
cleverLily(["21", "1570.98", "3"])