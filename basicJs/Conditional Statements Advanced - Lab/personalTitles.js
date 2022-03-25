function personalTitles(input){

    let age = Number(input[0]);
    let gener = input[1];
    switch(gener){
     case "m" :
    if (age >= 16){
        console.log("Mr.")
    }else{
        console.log("Master")
    }; break
    case "f" :
        if(age >= 16){
            console.log("Ms.")
        }else{
            console.log("Miss")
        }
    }
}
personalTitles(["22","f"])