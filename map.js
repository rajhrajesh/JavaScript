num = [1,2,3,4]
console.log(num.map((num)=> num * 2))
// Useing in obejct
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const names = users.map(user => user.name);
  console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
//   ages
  const ages = users.map(user => user.age);
  console.log(ages)
// Uppercase
  const uppercase = users.map(user => user.name.toLocaleUpperCase())
  console.log(uppercase)
//   updated user
const upadatedUser = users.map(user => ({...user, isActive:false, rollno:2201}))
console.log(upadatedUser)

const new_ = ['rajesh','raajh']
const length = new_.map(num=> num.length)
console.log(length)

// length in even
const users_ = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
const evenLengthNames = users_.filter(user => user.name.length % 3 !== 0).map(user => user.name);
console.log(evenLengthNames);
// unique values
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];

// Use Set to filter out duplicate values
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]










