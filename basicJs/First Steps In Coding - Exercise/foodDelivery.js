function foodDelivery(input){
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let sumMenu = (chicken * 10.35 + fish * 12.40 + vegan * 8.15) ;
    let total = sumMenu + sumMenu * 0.20 + 2.50;
    console.log(total)
}
foodDelivery(["2 ",
"4 ",
"3 "])