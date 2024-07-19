const inputStr = "JavaScript-is-amazing";
const spearotor = "-";
const replaceStr = "Programming";

const replace = inputStr.split("-").map((value, index, arr) => {
  return value.length > 7 ? (arr[index] = replaceStr) : value;
});
console.log(replace)