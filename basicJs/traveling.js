function traveling(input) {

    let index = 0;
    let command = input[index];
    index++;
    let price = Number(input[index]);
    index++;


    while (command !== "End") {

        let saved = 0;
        while (price >= saved) {
            let money = Number(input[index]);
            index++;
            saved += money;

        }
        console.log(`Going to ${command}!`);
        command = input[index];
        index++;
        price = Number(input[index]);
        index++;

    }

}
traveling(["France",
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
