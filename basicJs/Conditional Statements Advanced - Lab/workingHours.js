function workingHours(input){
    let hour = Number(input[0]);
    let day = input[1];
    if (hour >= 10 && hour <= 18){
    switch (day){
        default : console.log("closed"); break;
        case "Monday":
        case "Tuesday" :
        case "Wednesday" :
        case "Thursday" :
        case "Friday" :
        case "Saturday" : console.log("open"); break;       
    }
    }else{
        console.log("closed")
    }
}
workingHours(["5", "Monday"])