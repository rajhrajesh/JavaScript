const list = [
    [2, 3, 4],
    [4, 5, 6],
    [6, 7, 8],
  ];
  
  function arraySum(arr) {
      let sum = arr.reduce((acc, curr) => acc + curr, 0); // Added initial value for reduce
      return sum;
  }
  
  function findArrayElement(arr) {
      return arr.some((each) => each % 2 === 0);
  }
  
  const result = list.map((eachArr) => findArrayElement(eachArr) ? arraySum(eachArr) : 0);
  console.log(result);
  