function examPreparation(input){
    
    let index = 0
    let i = Number(input[index]);
    index++;
    let name =input[index];
    index++;
    let grade = Number(input[index]);
    index++
    let sumGrade = 0;
    let iN = 0;
    let iP = 0;
    let lastName = "";
    isBreak = false;

    while(name !== "Enough"){
        lastName = name

        if(grade <= 4){
            iN++;
        }else{
            iP++;
        }
        if(iN >= i){
            isBreak = true;
            break;
        }
        sumGrade += grade;
        name = input[index];
        index++;
        grade = Number(input[index]);
        index++

    }
    if(isBreak){
        console.log(`You need a break, ${iN} poor grades.`);
    }else{
        console.log(`Average score: ${(sumGrade/(iP + iN)).toFixed(2)}`);
        console.log(`Number of problems: ${iP + iN}`);
        console.log(`Last problem: ${lastName}`)
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])