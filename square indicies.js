const array = [1, 2, 3, 4, 5, 6, 7, 8];

function square(nums) {
  return nums.map((value, index) => {
    if (index % 2 === 0) {
      return (value *= value);
    } else {
      return value;
    }
  });
}
const result = square(array);
console.log(result);
