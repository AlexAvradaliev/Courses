function metricConverter(input){
    let number = Number(input[0]);
    let inUnit = input[1];
    let outUnit = input[2];

    if( inUnit === "mm"){
        number = number /1000

    }else if(inUnit === "cm"){
        number = number /100
    }else if (inUnit === "m"){
        number = number
    }
    if(outUnit === "mm"){
        console.log((number * 1000).toFixed(3))
    }else if(outUnit === "cm"){
        console.log((number * 100).toFixed(3))

    }else if(outUnit === "m"){
        console.log(number .toFixed(3))

    }
}
metricConverter(["12","mm","m"])