
let oscbucks = 0;
let price = 0;

const buy50 = document.getElementById("50");
const buy300 = document.getElementById("300");
const buy1000 = document.getElementById("1000");
const totalOscbucks = document.getElementById("totalOscbucks")
const totalPrice = document.getElementById("totalPrice");

const updateResults = (priceIncrease, oscbucksIncrease) => {
    oscbucks += oscbucksIncrease;
    price += priceIncrease;
    totalOscbucks.innerHTML = `Total Oscbucks: ${Math.round(oscbucks * 100) / 100}`;
    totalPrice.innerHTML = `Total Cost: $${Math.round(price * 100) / 100}`;
    const hidden = document.querySelectorAll(".hide");
    hidden.forEach(element => {
        element.className = "show";
    });
}

if (buy50) {
    buy50.addEventListener('click', () => {
        updateResults(1, 50);
    });
}
if (buy300) {
    buy300.addEventListener('click', () => {
        updateResults(3.99, 300);
    });
}
if (buy1000) {
    buy1000.addEventListener('click', () => {
        updateResults(12.49, 1000);
    });
}
