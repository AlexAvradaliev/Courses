function onTimeForTheExam(input) {

    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    let sumExamTime = (hourExam * 60) + minuteExam;
    let sumArrivalTime = (arrivalHour * 60) + arrivalMinute;
    let sum = sumExamTime - sumArrivalTime;
    let time = 0;

    if (sum >= 0 && sum <= 30 ){
        if (sum !== 0) {
            console.log("On time");
            console.log(`${sum} minutes before the start`);

        } else {
            console.log("On time");
        }
    } else if (sum > 30){
        console.log("Early");
        time = Math.abs(sum);
        let hour = Math.floor(time / 60);
        let minute = time % 60;

        if(hour === 0){
            console.log(`${minute} minutes before the start`);

        }else{
        if (minute < 10) {
            console.log(`${hour}:0${minute} hours before the start`);
        } else {
            console.log(`${hour}:${minute} hours before the start`);
        }
        }
    } else if (sum < 0) {
        console.log("Late");
        time = Math.abs(sum);
        let hour = Math.floor(time / 60);
        let minute = time % 60;

        if(hour === 0){
            console.log(`${minute} minutes after the start`);
        }else{
        if (minute < 10) {
            console.log(`${hour}:0${minute} hours after the start`);
        } else {
            console.log(`${hour}:${minute} hours after the start`);
        }
        }
    }
}
onTimeForTheExam(["16",
"00",
"15",
"00"])