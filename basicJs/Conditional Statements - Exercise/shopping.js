function shopping(input) {

    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let procesorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let priceVideo = videoCardCount * 250;
    let priceProcesor = priceVideo * 0.35;
    let priceRam = priceVideo * 0.10;

    let sum = priceVideo + priceProcesor * procesorCount + priceRam * ramCount;

    if (videoCardCount > procesorCount) {
        sum *= 0.85;
    }

    let diff = Math.abs(budget - sum);

    if (budget >= sum) {
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}

shopping(["920.45",
"3",
"1",
"1"])