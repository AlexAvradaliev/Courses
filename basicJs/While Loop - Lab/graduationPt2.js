function graduationPt2(input) {
    let index = 0;
    let name = input[index];
    index++;
    let i = 1;
    let isExluded = false;
    let sumgrade = 0;
    let evalNegative = 0;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++
        if (grade < 4.00) {
            evalNegative++;
            if (evalNegative >= 2) {
                isExluded = true;
                break;

            }
            continue;
        }
        sumgrade += grade
        i++
    }
    if (isExluded) {
        console.log(`${name} has been excluded at ${i} grade`);
    } else { 
        console.log(`${name} graduated. Average grade: ${(sumgrade / 12).toFixed(2)}`);
    }
}
graduationPt2(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])