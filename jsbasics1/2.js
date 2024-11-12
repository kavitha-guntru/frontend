const fruits = ["Apple", "Banana", "Cherry", "Date", "Fig"];

function sortFruits() {
  fruits.sort().reverse(); // Sorts in descending order
  document.getElementById("fruitsList").textContent = fruits.join(", ");
}
