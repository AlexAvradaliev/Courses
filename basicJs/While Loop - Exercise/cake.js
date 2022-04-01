function cake(input){
    

    let index = 0;
    let l = Number(input[index]);
    index++;
    let w = Number(input[index]);
    index++;
    let size = l * w;
    let command = Number(input[index]);
    index++;
    let isPiece = true;

    while(command !== "STOP"){
        let piece = Number(command);
        size -= piece;
        if(size < 0 ){
            isPiece = false;
            console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`);
            break;
        }

        command = input[index];
        index++

    }
    if (isPiece){
        console.log(`${Math.abs(size)} pieces are left.`);
    } 

}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])