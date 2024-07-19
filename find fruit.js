const entities = [
  { fruit: "Apple", vegetable: "Carrot" },
  { fruit: "Banana", vegetable: "Broccoli" },
  { fruit: "Orange", vegetable: "Spinach" },
];

const fruit = "Apple";

let fruitcontainer = [];
let vegetableContainer = [];
entities.forEach((each) =>
  each.fruit.includes(fruit) ? fruitcontainer.push(each) : ""
);
console.log(fruitcontainer);
