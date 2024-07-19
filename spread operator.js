const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenatedArray = [...array1, ...array2];
console.log(...concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
 
const sum_of_string = "Rajesh"
const empty_string = [...sum_of_string]
console.log(empty_string)

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];

console.log(...newArray); // Output: [1, 2, 3, 4, 5]


// series and product
const flattenedArray = [12,2,2,4,1];
const tempo_ = flattenedArray.map((num)=>(num * -4 + 10 )*3)
console.log(tempo_)