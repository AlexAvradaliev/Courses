function toyShop(input) {
    let price = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minnionCount = Number(input[4]);
    let truckCount = Number(input[5]);
    let count = puzzleCount + dollCount + bearCount + minnionCount + truckCount;
    let sum = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minnionCount * 8.20
        + truckCount * 2;
    if (count >= 50) {
        sum = sum * 0.75;
    }
    sum = sum * 0.90;

    if (sum >= price) {
        let result = sum - price
        console.log(`Yes! ${result.toFixed(2)} lv left.`)
    } else if (sum < price) {
        let result = price - sum
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
    }
}
toyShop(["500", "20", "25", "30", "50", "10"])