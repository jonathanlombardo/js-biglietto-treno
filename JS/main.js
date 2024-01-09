console.log("JS OK");

const resultElement = document.getElementById("resultElement");
const kmPrice = 0.21;
const under18Discount = 20;
const over65Discount = 40;
let finalPrice;
const userKm = parseInt(prompt("Quanti km devi fare?", "100"));
const userAge = parseInt(prompt("Quanti anni hai?", "21"));

if (isNaN(userAge) || isNaN(userKm)) {
  alert("I dati inseriti non sono corretti. Assicurtati di inserire solo numeri.");
} else {
  finalPrice = userKm * kmPrice;
  if (userAge < 18) {
    finalPrice = (finalPrice / 100) * (100 - under18Discount);
  } else if (userAge > 65) {
    finalPrice = (finalPrice / 100) * (100 - over65Discount);
  }
  finalPrice = Math.round(finalPrice * 100) / 100;
  resultElement.innerText = String(finalPrice) + " €";
}
