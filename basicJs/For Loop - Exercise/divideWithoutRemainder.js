function divideWithoutRemainder(input) {
    let num = Number(input[0]);
    let numL = input.length

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i < numL; i++) {
        let current = input[i];

        if (current % 4 === 0) {
            p3++
        } 
         if (current % 3 === 0) {
            p2++
        } 
         if (current % 2 === 0) {
            p1++
        }
    }
    console.log(`${(p1/num*100).toFixed(2)}%`);
    console.log(`${(p2/num*100).toFixed(2)}%`);
    console.log(`${(p3/num*100).toFixed(2)}%`);
}
divideWithoutRemainder(["3",
"3",
"6",
"9"])
