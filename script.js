const km = prompt("inserisci km");
console.log(km);

const age = prompt("Inserisci età");
console.log(age);

const priceKm = 0.21;

let somma = km * 0.21;
console.log(somma);

const priceMinorenni = (somma * 20) / 100;
const priceOldBoy = (somma * 40) / 100;


if (age <= 17 ) {
    somma = somma - priceMinorenni;
} 
console.log(somma)

if (age >= 65) {
    somma = somma - priceOldBoy;
}
console.log(somma)


