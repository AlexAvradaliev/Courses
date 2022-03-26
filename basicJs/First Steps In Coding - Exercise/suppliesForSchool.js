function suppliesForSchool(input){
    let pen = Number(input[0]);
    let marker = Number(input[1]);
    let preparad = Number(input[2]);
    let procent = Number(input[3]) / 100;

    let totalconsomative = pen * 5.80 + marker * 7.20 + preparad * 1.20
    let total = totalconsomative - (totalconsomative * procent);
    console.log(total)
}