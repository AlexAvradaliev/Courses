function minNumber(input){
    let num = Number(input[0])
    let minNum = Number.MAX_SAFE_INTEGER;
    let numL = input.length

    for(let i = 1 ; i < numL; i++ ){
        let current = Number(input[i])
        if(current < minNum){
            minNum = current;
        }
        
    }
    console.log(minNum)
    
}
minNumber(["3",
"-10",
"20",
"-30"])