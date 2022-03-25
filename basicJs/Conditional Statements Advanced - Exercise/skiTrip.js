function skiTrip(input){
    let day = Number(input[0]);
    let room = input[1];
    let rating = input[2];
    let result = 0;
    
    switch(room){
        case "room for one person":
            result = (day -1 ) * 18
            break;
        case "apartment":
            result = (day - 1) * 25
            if(day < 10){
                result = result * 0.70
            }else if(day >= 10 && day <= 15){
                result = result * 0.65
            }else{
                result = result * 0.50
            }
            break;
        case "president apartment" :
            result = (day - 1 ) * 35
            if(day < 10){
                result = result * 0.90
            }else if(day >= 10 && day <= 15){
                result = result * 0.85
            }else{
                result = result * 0.80
            }
            break;



    }
    if (rating === "positive"){
        result = result * 1.25
    }else{
        result = result * 0.90
    }
    console.log(result.toFixed(2))
}
skiTrip (["14","apartment","positive"])