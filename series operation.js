const num = [12,2,2,4,1]
const result = num.map((value)=>{
    const mul9 = value * 9
    const sub20 = mul9 - 20 
    const mul7 = sub20 * 7
    return mul7
})
console.log(...result)