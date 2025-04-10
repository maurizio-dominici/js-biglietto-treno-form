// ^ RACCOLTA DATI
const kmPrice = 0.21;
const askName = prompt("come ti chiami?");
const totalKm = Number(prompt("quanti km vuoi percorrere"));
// const passengerAge = Number(prompt("quanti anni hai"));
const passengerAge = prompt("sei maggiorenne, minorenne o over65");

const namePassengers = document.getElementById("name");
const kmPassengers = document.getElementById("km");
const passengersAgeRange = document.getElementById("age");
console.log(passengersAgeRange);

namePassengers.value = askName;
kmPassengers.value = totalKm;
passengersAgeRange.value = passengerAge;

console.log(namePassengers.value);
console.log(kmPassengers.value);
console.log(passengersAgeRange.value);

console.log(namePassengers);
console.log(kmPassengers);
console.log(passengersGen);

// console.log("kmPrice", kmPrice);
// console.log("totalKm", totalKm);
// console.log("passengerAge", passengerAge);

// ^ SVOLGIMENTO

// let price = totalKm * kmPrice;

// console.log(price);

// if (passengerAge < 18) {
//   console.log("l'utente è minorenne");

//   price = price * 0.8;
// } else if (passengerAge > 65) {
//   console.log("l'utente è over");

//   price = price * 0.6;
// }

// console.log(`hai acquistato al prezzo ${price.toFixed(2)}€`);
