const wordsList = ["apple", "banana", "orange", "pineapple"];
const myString = "ap";

const result = wordsList.map(value => {
    if (value.startsWith(myString) || value.endsWith(myString)) {
        return value.toUpperCase();
    } else {
        return value;
    }
});

console.log(result);
