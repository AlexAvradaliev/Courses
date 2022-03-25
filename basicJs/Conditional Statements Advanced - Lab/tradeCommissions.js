function tradeCommissions(input){
    let town = input[0];
    let price = Number(input[1]);
    let result = 0

    if (price >= 0 && price <= 500){
        switch(town){
            case "Sofia":
                result = price * 0.050
                console.log(result.toFixed(2))
            break;

            case "Varna":
                result = price * 0.045
                console.log(result.toFixed(2))
            break;

            case "Plovdiv":
                result = price * 0.055
                console.log(result.toFixed(2))
            break;
            default: console.log("error"); break;
        }
    }else if (price > 500 && price <= 1000){
        switch(town){
            case "Sofia":
                result = price * 0.070
                console.log(result.toFixed(2))
            break;

            case "Varna":
                result = price * 0.075
                console.log(result.toFixed(2))
            break;

            case "Plovdiv":
                result = price * 0.080
                console.log(result.toFixed(2))
            break;
            default: console.log("error"); break;
        }
    }else if (price > 1000 && price <= 10000){
        switch(town){
            case "Sofia":
                result = price * 0.080
                console.log(result.toFixed(2))
            break;

            case "Varna":
                result = price * 0.10
                console.log(result.toFixed(2))
            break;

            case "Plovdiv":
                result = price * 0.12
                console.log(result.toFixed(2))
            break;
            default: console.log("error"); break;
        }
    }else if (price > 1000){
        switch(town){
            case "Sofia":
                result = price * 0.12
                console.log(result.toFixed(2))
            break;

            case "Varna":
                result = price * 0.13
                console.log(result.toFixed(2))
            break;

            case "Plovdiv":
                result = price * 0.145
                console.log(result.toFixed(2))
            break;
            default: console.log("error"); break;
        }
    }else{
        console.log("error")
    }
}
tradeCommissions(["Plovdiv", "499.99"])