const players = [
  { name: "Player 1", points: [100, 90, 110, 95] },
  { name: "Player 2", points: [68, 65, 55, 48] },
  { name: "Player 3", points: [120, 115, 110, 105] },
  { name: "Player 4", points: [90, 85, 92, 88] },
];

const result = players.filter((eachPl) => {
  return eachPl.points.every((score) => score > 75);
});
let array = []
result.map((obj)=>{
    array.push(obj.name)
})

console.log(array)