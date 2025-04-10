// ^ RACCOLTA DATI
const kmPrice = 0.21;
const totalKm = Number(prompt("quanti km vuoi percorrere"));
const passengerAge = Number(prompt("quanti anni hai"));

// console.log("kmPrice", kmPrice);
// console.log("totalKm", totalKm);
// console.log("passengerAge", passengerAge);

// ^ SVOLGIMENTO

let price = totalKm * kmPrice;

// console.log(price);

if (passengerAge < 18) {
  //   console.log("l'utente è minorenne");

  price = price * 0.8;
} else if (passengerAge > 65) {
  //   console.log("l'utente è over");

  price = price * 0.6;
}

console.log(`hai acquistato al prezzo ${price.toFixed(2)}€`);
