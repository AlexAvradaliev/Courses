function sumOfNumbers(input){
    let numText = input[0] + "";
    let result = 0;

    for(let i = 0; i < numText.length ; i++){
        result += Number(numText[i])
    }
console.log(`The sum of the digits is:${result}`)
}
vowelsSum([1234])