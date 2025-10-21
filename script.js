let coins = 0;
const coinsDisplay = document.getElementById("coins");
const workBtn = document.getElementById("workBtn");

workBtn.addEventListener("click", () => {
  coins += 15;
  coinsDisplay.textContent = coins;
});