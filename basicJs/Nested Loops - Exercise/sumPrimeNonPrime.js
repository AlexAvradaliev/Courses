function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let primeNum = 0;
    let nonPrimeNum = 0;

    while (command !== "stop") {
        let num = Number(command);
        let isNegative = true;

        if (num < 0) {
            console.log("Number is negative.")
            command = input[index];
            index++;
            isNegative = false;
            continue;
        }
        if (num === 1) {
            primeNum += num;
            command = input[index];
            index++;
            continue;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isNegative = false;
                break;
            }
        }
        if (isNegative) {
            primeNum += num;
        } else {
            nonPrimeNum += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);
}

sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])