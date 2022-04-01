function vacation(input) {

    let i = 0;
    let needs = Number(input[i]);
    i++;
    let saveMoney = Number(input[i]);
    i++;
    let type = input[i];
    i++;
    let money = Number(input[i]);
    i++;

    let spendCounter = 0;
    let isGo = true;
    let days = 0

    while (needs > saveMoney) {
        days++
        if (saveMoney < 0) {
            saveMoney = 0;
        }
        switch (type) {
            case "spend":
                saveMoney -= money;
                spendCounter++
                break;
            case "save":
                saveMoney += money;
                spendCounter = 0;
                break;
        }
        if (spendCounter >= 5) {
            isGo = false;
            break;
        }
        type = input[i];
        i++;
        money = Number(input[i]);
        i++;
    }
    if (isGo) {
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(days)
    }
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])


