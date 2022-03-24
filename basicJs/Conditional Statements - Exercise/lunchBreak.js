function lunchBreak(input) {
    let name = input[0];
    let conEpisode = Number(input[1]);
    let conPause = Number(input[2]);

    let midi = conPause / 8;
    let pose = conPause / 4;

    let sum = conPause - midi - pose;
    
    let diff =Math.abs(conEpisode - sum);

    if(sum >= conEpisode){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`)
    }


}
lunchBreak(["Teen Wolf",
"48",
"60"])