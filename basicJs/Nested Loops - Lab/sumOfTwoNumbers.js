function sumOfTwoNumbers(input){

    let inNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinationsCounter = 0;
    let isCombinations = true;

    for(let a = inNum; a <= endNum; a++){
        for(let b = inNum; b <= endNum; b++){
            combinationsCounter++;
            if(a + b === magicNum){
                console.log(`Combination N:${combinationsCounter} (${a} + ${b} = ${magicNum})`)
                isCombinations = false;
                break;
            }
        }
        if(!isCombinations){
            break;
        }
    }
    if(isCombinations){
        console.log(`${combinationsCounter} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwoNumbers(["88",
"888",
"1000"])