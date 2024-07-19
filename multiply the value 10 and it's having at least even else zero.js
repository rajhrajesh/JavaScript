const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 81, 9],
];

const result = nestedArray.map((eachArr) => {
  let isTrue = eachArr.some((num) => num % 2 === 0);
  if (isTrue) {
    return eachArr.reduce((acc, crr) => acc + crr);
  } else {
    return 0;
  }
});
console.log(result);
