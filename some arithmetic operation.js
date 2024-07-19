function Operation(firstNum, secondNum) {
  Operation.prototype.ratio = () => firstNum/secondNum;
  Operation.prototype.cubeNumbers = () => firstNum ** 3 + secondNum ** 3;
  Operation.prototype.prosquareNumbers = () => firstNum ** 2 * secondNum ** 2;
}

const operation1 = new Operation(8, 4);
console.log(operation1.ratio())
console.log(operation1.cubeNumbers())
console.log(operation1.prosquareNumbers())