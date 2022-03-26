function basketballEquipment(input){
    let taxe = Number(input[0]);

    let shoes = taxe * 0.60
    let equipe = shoes * 0.80
    let ball = equipe / 4 
    let acc = ball / 5 
    let total = shoes + equipe + ball + acc + taxe
    console.log(total)

}
basketballEquipment([365])