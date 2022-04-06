function tournamentOfChristmas(input) {
    let i = 0;
    let days = Number(input[i]);
    i++;
    let sumMoney = 0;
    let dayWin = 0;
    let dayLose = 0;

    for (let d = 0; d < days; d++) {
        let command = input[i];
        i++;
        let winCounter = 0;
        let loseCounter = 0;
        let moneyDays = 0;
        while (command !== "Finish") {
            let profit = input[i];
            i++
            switch (profit) {
                case "win":
                    winCounter++;
                    moneyDays += 20;
                    break;
                case "lose":
                    loseCounter++;
                    break;

            }
            command = input[i];
            i++
        }
        if (winCounter > loseCounter) {
            moneyDays *= 1.10;
            sumMoney += moneyDays;
            dayWin++;

        } else {
            dayLose++
            sumMoney += moneyDays;

        }
    }
    if (dayWin > dayLose) {
        console.log(`You won the tournament! Total raised money: ${(sumMoney * 1.20).toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${sumMoney.toFixed(2)}`)
    }
}
tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])