const inputStr = "JavaScript"
const subStr = "Script"

let isIncluded = inputStr.includes(subStr)
if(isIncluded){
    let reqIndex = inputStr.indexOf(subStr)
    const slice = inputStr.slice(reqIndex,inputStr.length)
    console.log(slice)
}
else{
    console.log(inputStr)
}