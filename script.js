const km = prompt("inserisci km");
console.log(km);

const age = prompt("Inserisci età");
console.log(age);

const priceKm = 0.21;

let somma = km * 0.21;
console.log(somma);



if (age <= 17 ) {
    somma = ((somma * 20) / 100) ;
} else { somma = somma };
console.log(somma)


