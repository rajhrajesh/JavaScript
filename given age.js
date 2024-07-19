const peopleOfAge = [
  [25, 30, 18, 20],
  [35, 40, 16, 22],
  [28, 19, 21, 17],
];
const age_limit = 35;

function toCheckalltheageorgreaterthan(peo,li) {
    const result = peo.map(x =>x.some(y=> y>li))
    return result
}
console.log(toCheckalltheageorgreaterthan(peopleOfAge,age_limit))
