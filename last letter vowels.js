let name = "Rajesh";
let s = `Hello, ${name}! Welcome to your coding journe`;
const vowels = ['A','E','I','O','U']
const isEndsWith = vowels.some(chr => s.toLocaleUpperCase().endsWith(chr))
console.log(isEndsWith)