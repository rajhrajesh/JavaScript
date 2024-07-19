const strings = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "banana",
];

const uniqueStrings = strings.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueStrings); // Output: ['apple', 'banana', 'orange']

const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];

const uniqueNumbers = numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

//average
const numm = [2, 2, 4, 1];
const avv1 = numm.reduce((acc, crr) => acc * crr);
let avv = avv1;
console.log(avv);

//odd string to uppercase

const words = ["apple", "cherry", "orange",'0'];
const oddLengthWordsUpper = words.filter(word=> word.length % 2 !== 0).map(word=> word.toUpperCase())
console.log(oddLengthWordsUpper)

///averge 
const array = [12,2,2,4,1]
let sum = 0
const lowee = array.forEach((index,value) => {
    if(index % 2 === 0){
        sum = sum + value
    }
})
const av = Math.ceil(array.length/2)
console.log(sum/av)

//flattern array
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattern = nestedArray.reduce((acc,crr)=>{
    return [...acc,...crr]
})
console.log(...flattern)
console.log(flattern)









