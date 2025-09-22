const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "grape", color: "purple", calories: 62 },
  { name: "orange", color: "orange", calories: 62 },
  { name: "kiwi", color: "brown", calories: 42 },
];

fruits.push({ name: "mango", color: "yellow", calories: 150 });
//fruits.pop();
//fruits.splice(1,2)

//fruits.forEach(fruit => console.log(fruit.name));

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// console.log(fruitNames);
// console.log(fruitColors);

//const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
//const lowcal = fruits.filter((fruit)=>fruit.calories<100);
// const highcal = fruits.filter((fruit)=>fruit.calories>100);

// console.log(highcal);

// const maxfruit = fruits.reduce((max, fruit) => (fruit.calories > max.calories ? fruit : max))
// console.log(maxfruit);
const minfruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
console.log(minfruit);
