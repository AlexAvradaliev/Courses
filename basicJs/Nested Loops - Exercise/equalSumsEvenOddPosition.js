function equalSumsEvenOddPosition(input){

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let print = ``;

    for(let i = firstNum; i <= secondNum;i++){
        let currentNum = i.toString();
        let currentNumL = currentNum.length
        let odd = 0;
        let even = 0;

        for(let j = 0; j < currentNumL; j++){
                let currentDigit = Number(currentNum.charAt(j));
                if(j % 2 == 0){
                    even += currentDigit;
                }else{
                    odd += currentDigit;
                }
        }
        if(odd === even){
                   print += `${i} `;
        }
    }
    console.log(print)
}
equalSumsEvenOddPosition(["100000",
"100050"])
