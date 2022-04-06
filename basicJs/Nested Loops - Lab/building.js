function building(input) {
    let etages = Number(input[0]);
    let rooms = Number(input[1]);

    for (let e = etages; e > 0; e--) {
        let print = ""
        for (let r = 0; r < rooms; r++) {
            if (e === etages) {

                print += `L${e}${r} `;
            } else if (e % 2 === 0) {
                print += `O${e}${r} `;

            } else {
                print += `A${e}${r} `;
            }
        }
        console.log(print)
    }
}
 building(["6", "4"])
