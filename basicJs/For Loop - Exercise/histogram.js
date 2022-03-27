function histogram(input) {
    let num = Number(input[0]);
    let numL = input.length

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i < numL; i++) {
        let current = input[i];

        if (current < 200) {
            p1++
        } else if (current <= 399) {
            p2++
        } else if (current <= 599) {
            p3++
        } else if (current <= 799) {
            p4++
        } else if (current >= 800) {
            p5++
        }
    }
    console.log(`${(p1/num*100).toFixed(2)}%`);
    console.log(`${(p2/num*100).toFixed(2)}%`);
    console.log(`${(p3/num*100).toFixed(2)}%`);
    console.log(`${(p4/num*100).toFixed(2)}%`);
    console.log(`${(p5/num*100).toFixed(2)}%`);

}
histogram(["3",
    "1",
    "2",
    "999"])
