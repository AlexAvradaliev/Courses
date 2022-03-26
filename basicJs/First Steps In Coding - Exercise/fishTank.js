function fishTank(input){
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let procent = Number(input[3]) / 100;

    let total = (l * w *h)/ 1000 * (1 - procent);
    console.log(total)

}
fishTank(["85 ",
"75 ",
"47 ",
"17 "])