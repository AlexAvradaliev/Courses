function numbersDivisibleBy(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let result = 0;

    for ( let i = a; i <= b; i++){
        if(i % 9 ===0){
            result += i;
        }
    }
    console.log(`The sum: ${result}`);
    for(let i = a ; i <= b; i++ ){
        if(i % 9 === 0){
            console.log(i);
        }
    }
}
numbersDivisibleBy(["100", "200"])