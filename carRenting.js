function carRenting(cars, distance) {
  const suitableCars = [];

  cars.forEach((car) => {
    const maxDistance = (car.fuelAmount / car.avgConsumption) * 100;

    if (maxDistance >= distance) {
      suitableCars.push(car.type);
    }
  });

  if (suitableCars.length > 0) {
    return suitableCars;
  } else {
    return null;
  }
}

const cars = [
  {
    type: "Toyota Corolla",
    avgConsumption: 8.8,
    fuelAmount: 32,
  },
  {
    type: "Skoda Octavia",
    avgConsumption: 7.2,
    fuelAmount: 25,
  },
  {
    type: "Fiat Uno",
    avgConsumption: 6.1,
    fuelAmount: 24,
  },
];

console.log(carRenting(cars, 350));
console.log(carRenting(cars, 500));

module.exports = carRenting;
