// ^ RACCOLTA DATI
const kmPrice = 0.21;
const namePassengersEl = document.getElementById("name");
const totalKmEl = document.getElementById("km");
const passengersAgeRangeEl = document.getElementById("age");
const buttonEl = document.getElementById("test");
const formEl = document.getElementById("form-train");
const cardHiddenEl = document.getElementById("card-hidden");

// console.log(kmPrice);
// console.log(buttonDOMEl);
// console.log(passengersAgeRange);
// console.log(formEl);

// ^ SVOLGIMENTO

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const totalKm = parseInt(totalKmEl.value); // int
  let passengerAge = passengersAgeRangeEl.value;
  let price = totalKm * kmPrice;

  if (passengerAge === "minorenne") {
    console.log("l'utente è minorenne");

    price = price * 0.8;
  } else if (passengerAge === "over65") {
    console.log("l'utente è over65");

    price = price * 0.6;
  }

  // console.log(namePassengersEl.value);
  // console.log(totalKmEl.value);
  // console.log(passengersAgeRangeEl.value);
  // console.log(`hai acquistato al prezzo ${price.toFixed(2)}€`);
  cardHiddenEl.innerHTML = `
    <div class="col">
      <div class="card">
        <div class="card-header">
          ${namePassengersEl.value}
        </div>
        <div class="card-body">
          <h5 class="card-title">${`hai acquistato al prezzo ${price.toFixed(
            2
          )}€`}</h5>
        </div>
      </div>
    </div>
  `;
});
