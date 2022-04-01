function walking(input) {

    let target = 10000;
    let index = 0;
    let step = input[index];
    index++;

    let sumStep = 0;

    while (step !== undefined) {

        if (step !== "Going home") {
            step = Number(step);
            sumStep += step;
        } else {
            step = input[index];
            index++;
            continue;

        }
        step = input[index];
        index++;
    }
    if (sumStep >= target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(target - sumStep)} steps over the goal!`);

    } else {
        console.log(`${Math.abs(target - sumStep)} more steps to reach goal.`);
    }

}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])