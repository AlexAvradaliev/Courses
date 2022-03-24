function minutes(input){
    let hour = Number(input[0]);
    let minute = Number(input[1]);
    minute +=15;

    if(minute >= 60){
        hour++;
        minute -= 60;
    }
    if (hour >= 24){
        hour -=24;
    }
    if(minute <10){
        console.log(`${hour}:0${minute}`);
    }else{
        console.log(`${hour}:${minute}`);
    }
}
minutes(["1", "46"])