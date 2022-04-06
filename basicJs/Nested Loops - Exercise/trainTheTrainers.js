function trainTheTrainers(input) {
    let i = 0;
    let people = Number(input[0]);
    i++;

    let command = input[i];
    i++;

    let counter =0;
    let gradeSum = 0;

    while(command !== "Finish"){
        let name = command;
        let tempGradeSum = 0;
        counter++
        for(let j = 0 ; j < people; j++){
            let grade = Number(input[i]);
            i++;
            tempGradeSum += grade;

        }
        let tempAvr = tempGradeSum / people
        console.log(`${name} - ${tempAvr.toFixed(2)}.`);
        command = input[i];
        i++;
        gradeSum += tempAvr
    }
    console.log(`\Student's final assessment is ${(gradeSum / counter).toFixed(2)}.`)
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])