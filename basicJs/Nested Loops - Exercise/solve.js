function solve(input) {
    let first = Number(input[0]);
    let last = Number(input[1]);
    let printLine = ''

    for (let i = first; i <= last; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currendDigit = Number(currentNum.charAt(j));
            if(j % 2 === 0){
                evenSum += currendDigit;
            }else{
                oddSum += currendDigit;
            }
            if(oddSum === evenSum){
                printLine += `${i} `;
            }


        }
    }
    console.log(printLine)
}
solve(["100000",
"100050"])