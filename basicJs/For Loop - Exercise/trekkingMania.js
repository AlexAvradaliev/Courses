function trekkingMania(input){
    let i = 0;
    let group = Number(input[i]);
    i++

    let memberCount = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0

    for( let g = 1 ; g <= group ; g++){
        let member = Number(input[i]);
        i++;
        memberCount += member; 
        if(member >= 41){
            everest += member;

        }else if(member >= 26){
            k2 += member;

        }else if(member >= 13){
            kilimanjaro += member;
            
        }else if(member >= 6){
            monblan += member;
            
        }else if(member >= 0){
            musala += member;
            
        }
    }
    console.log(`${(musala / memberCount * 100).toFixed(2)}%`);
    console.log(`${(monblan / memberCount * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / memberCount * 100).toFixed(2)}%`);
    console.log(`${(k2 / memberCount * 100).toFixed(2)}%`);
    console.log(`${(everest / memberCount * 100).toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])