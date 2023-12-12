
//let word = prompt("scrivi una parola palindroma")


function palidroma(word, wordReverse) {
    

    let wordSplit = word.split("");
    console.log(wordSplit)

    wordDivisa = wordSplit.reverse();
    console.log(wordDivisa)
    

    wordReverse = wordDivisa.join('');
    console.log(wordReverse)
    console.log(word)

    if(word == wordReverse){
        console.log(true)
    }
    else{
        console.log(false)
    }

    

    return ;


}

//wordReverse = wordSplit.reverse()
palidroma(prompt("scrivi una parola palindroma"), "")





