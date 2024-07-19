const fruits = [
  {
    name: "Apple",
    state: "Ripe",
  },
  {
    name: "Banana",
    state: "Unripe",
  },
  {
    name: "Mango",
    state: "Overripe",
  },
];

const result = fruits.some((eachArr)=> eachArr.name === "Ripe" || eachArr.state === "Ripe")
console.log(result? "YES" : "NO")
