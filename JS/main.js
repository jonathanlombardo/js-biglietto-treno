console.log("JS OK");

const userKMElement = document.getElementById("userKM");
const userAgeElement = document.getElementById("userAge");
const partialPriceElement = document.getElementById("partialPrice");
const under18LabelElement = document.getElementById("under18Label");
const under18DiscountElement = document.getElementById("under18Discount");
const over65LabelElement = document.getElementById("over65Label");
const over65DiscountElement = document.getElementById("over65Discount");
const finalPriceElement = document.getElementById("finalPrice");

const kmPrice = 0.21;
const under18Discount = 20;
const over65Discount = 40;
let partialPrice;
let finalPrice;
const userKm = parseInt(prompt("Quanti km devi fare?", "100"));
const userAge = parseInt(prompt("Quanti anni hai?", "21"));

if (isNaN(userAge) || isNaN(userKm) || userAge == 0 || userKm == 0) {
  alert("I dati inseriti non sono corretti. Assicurtati di inserire solo numeri maggiori di 0");
} else {
  partialPrice = userKm * kmPrice;
  userKMElement.innerText = String(userKm) + " km";
  userAgeElement.innerText = String(userAge) + " anni";

  if (userAge < 18) {
    const discount = (partialPrice * under18Discount) / 100;
    finalPrice = partialPrice - discount;

    under18LabelElement.setAttribute("class", "d-block");
    under18DiscountElement.setAttribute("class", "d-block");
    under18DiscountElement.innerText = "-" + discount.toFixed(2) + " €";
  } else if (userAge > 65) {
    const discount = (partialPrice * over65Discount) / 100;
    finalPrice = partialPrice - discount;

    over65LabelElement.setAttribute("class", "d-block");
    over65DiscountElement.setAttribute("class", "d-block");
    over65DiscountElement.innerText = "-" + discount.toFixed(2) + " €";
  } else {
    finalPrice = partialPrice;
  }

  partialPriceElement.innerText = partialPrice.toFixed(2) + " €";
  finalPriceElement.innerText = finalPrice.toFixed(2) + " €";
}
