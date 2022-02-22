/* km chiesti all'utente */
const km = prompt("inserisci km");
console.log(km);
document.getElementById("km").innerHTML = km;


/* età chiesta all'utente */
const age = prompt("Inserisci età");
console.log(age);
document.getElementById("age").innerHTML = age;


/* prezzo fisso al km */
const priceKm = 0.21;


/* calcolo in base ai km inseriti dall'utente e al prezzo al km */
let somma = km * 0.21;
console.log(somma);


/* variabili riferite agli sconti da applicare eventualmente */
const priceMinorenni = (somma * 20) / 100 ;
const priceOldBoy = (somma * 40) / 100 ;



if (age <= 17 ) {
    somma = somma - priceMinorenni;
} 
else if (age >= 65) {
    somma = somma - priceOldBoy;
} 
else{
    somma=somma;
}


console.log(somma)
document.getElementById("somma").innerHTML = somma.toFixed(2) + " €";


