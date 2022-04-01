function accountBalance(input) {
    let index = 0;
    let balance = input[index];
    index++;
    let total = 0;
    while (balance !== "NoMoreMoney") {
        let money = Number(balance);

        if (money <= 0) {
            console.log(`Invalid operation!`);
            break;
        }
        total += money;
        console.log(`Increase: ${(money).toFixed(2)}`);
        balance = input[index];
        index++;
        
    }
    console.log(`Total: ${total.toFixed(2)}`)
}
accountBalance(["120",
    "45.55",
    "-150"])