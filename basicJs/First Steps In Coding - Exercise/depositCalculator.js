function depositCalculator(input){
    let sumDeposit = Number(input[0]);
    let timeDeposit = Number(input[1]);
    let procentYear = Number(input[2]);
    let procent = procentYear / 100;
    let sumProcent = sumDeposit * procent
    let mountly = sumProcent / 12
    let total = sumDeposit + (timeDeposit * mountly)

console.log(total.toFixed(2))
}
depositCalculator(["200 ",
"3 ",
"5.7 "])