const car = { make: "Toyota", model: "Corolla", year: 2020 };

for (let property in car) {
  console.log(property + ": " + car[property]);
}
