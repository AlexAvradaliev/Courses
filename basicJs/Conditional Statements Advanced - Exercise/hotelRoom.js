function hotelRoom(input) {

    let mounth = input[0];
    let night = Number(input[1]);

    if(mounth === "May" || mounth === "October"){
        if(night >7 && night <= 14){
            console.log(`Apartment: ${(night * 65).toFixed(2)} lv.`);
            console.log(`Studio: ${(night * 50 * 0.95).toFixed(2)} lv.`);

        }else if(night <= 7){
            console.log(`Apartment: ${(night * 65).toFixed(2)} lv.`);
            console.log(`Studio: ${(night * 50).toFixed(2)} lv.`);

        }else if(night > 14){
            console.log(`Apartment: ${(night * 65 * 0.90).toFixed(2)} lv.`);
            console.log(`Studio: ${(night * 50 * 0.70).toFixed(2)} lv.`);
        }
    }else if(mounth === "June" || mounth === "September" ){
        if(night > 14){
            console.log(`Apartment: ${(night * 68.70 * 0.90).toFixed(2)} lv.`);
            console.log(`Studio: ${(night * 75.20 * 0.80).toFixed(2)} lv.`);

        }else if(night <= 14){
            console.log(`Apartment: ${(night * 68.70).toFixed(2)} lv.`);
            console.log(`Studio: ${(night * 75.20).toFixed(2)} lv.`);
        }

    }else if(mounth === "July" || mounth === "August" ){
        if(night > 14){
            console.log(`Apartment: ${(night * 77 * 0.90 ).toFixed(2)} lv.`);
            console.log(`Studio: ${(night * 76 ).toFixed(2)} lv.`);

        }else if(night <= 14){
            console.log(`Apartment: ${(night * 77).toFixed(2)} lv.`);
            console.log(`Studio: ${(night * 76).toFixed(2)} lv.`);
        }

    }
}
hotelRoom(["August",
"20"])