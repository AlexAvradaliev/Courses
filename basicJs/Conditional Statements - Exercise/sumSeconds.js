 function sumSeconds(input){
     let first = Number(input[0]);
     let second = Number(input[1]);
     let third =Number(input[2]);
     let result = 0;

     result = first + second + third;
     let minutes = Math.floor(result / 60);
     let secundes = result % 60

     if(secundes < 10){
         console.log(`${minutes}:0${secundes}`);
     }else{
         console.log(`${minutes}:${secundes}`)
     }
 }
 sumSeconds(["35",
 "45",
 "44"])