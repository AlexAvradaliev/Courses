function traveling1(input){
    let i = 0;
    let command = input[i++];


    while(command !== "End"){
        let distenation = command;
        let price = Number(input[i++]);
       
        let saved = 0;
        while(price > saved){
            saved += Number(input[i++]);

        }
        console.log(`Going to ${distenation}!`);
        command = input[i++];
        
    }
}
traveling1(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
