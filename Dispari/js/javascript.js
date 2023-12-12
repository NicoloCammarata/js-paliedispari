
/*const pariDispari = [
    "Pari",
    "dispari"

]*/
    



const myUl = document.getElementById("sceltaPari")

const newLi = document.createElement('li');
newLi.append("Pari");
myUl.append(newLi);

newLi.addEventListener('click', function () {
       
    console.log(" hai scelto pari")
    
});


const myUlDisp = document.getElementById("sceltaDispari")

const nuovoLi = document.createElement('li');
nuovoLi.append("Dispari");
myUlDisp.append(nuovoLi);

nuovoLi.addEventListener('click', function () {
       
    console.log(" hai scelto dispari")
    
})


//const ParioDispari = prompt("Pari o Dispari")

const nScelto = prompt("n. tra 1 e 5")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let numeroRandom = getRndInteger(1, 5);

console.log(numeroRandom);




if((nScelto + numeroRandom) % 2 == 0 && newLi.console.log(" hai scelto pari")){
    console.log('Vinto')
}
else{
    console.log("Perso")
}



    















