function countTheWords(input){
    let text = input[0];
    let textL = text.length
    let space = 0;

    for(let i = 0 ; i < textL; i++){
        if(text[i] === " "){
            space++
        }

    }
    let words = space + 1
    if(words > 10){
        console.log(`The message is too long to be send! Has ${words} words.`)
    }else{
        console.log("The message was sent successfully!")
    }
}
countTheWords(["This message has exactly eleven words. One more as it's allowed!"])