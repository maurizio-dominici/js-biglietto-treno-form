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
  let price = totalKm * kmPrice;
  const discountMinor = price * 0.8;
  const discountSenior = price * 0.6;
  let passengerAge = passengersAgeRangeEl.value;

  if (passengerAge === "minorenne") {
    console.log("l'utente è minorenne");

    price = discountMinor;
  } else if (passengerAge === "over65") {
    console.log("l'utente è over65");

    price = discountSenior;
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
          <h6>riepilogo del biglietto</h6>
          <ul>
            <li>Range di età: ${passengersAgeRangeEl.value}</li>
            <li>Km selezionati: ${totalKmEl.value}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
});
