function repainting(input){
    let plastque = Number(input[0]);
    let paint = Number(input[1]);
    let lequid = Number(input[2]);
    let time = Number(input[3]);

    let sumMat = (plastque + 2)*1.50 + (paint * 1.10)*14.50 + lequid * 5 + 0.40
    let total = sumMat + sumMat* 0.30 * time
    console.log(total)

}
repainting(["5 ",
"10 ",
"10 ",
"1 "])