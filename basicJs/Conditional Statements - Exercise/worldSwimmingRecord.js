function worldSwimmingRecord(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secondsForMeter = Number(input[2]);

    let distanceForMeter = distance * secondsForMeter
    let delay = Math.floor(distance / 15 )* 12.5
    let totalTime = distanceForMeter + delay
    if(totalTime >= record){
       console.log(`No, he failed! He was ${Math.abs(record - totalTime).toFixed(2)} seconds slower.`)

    }else{
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])