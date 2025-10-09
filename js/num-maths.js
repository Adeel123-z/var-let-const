
let score=400
console.log(typeof score)
//
const scores=400
console.log(scores)
//
//some method of number are
const balance =new Number(500)
console.log(balance)
//the diference between number and new number is that new number is an object so it will clarify that type of balance is number
console.log(balance.toString())
console.log(balance.toFixed(2))// it will be used in decimal to stop the size of decimal
const otherNumber = 123.3456
console.log(otherNumber.toPrecision(3))// it will be used to stop the size of number
//Another Example
const otherNumbers = 1234.3456
console.log(otherNumbers.toPrecision(3))

const maths=100000
console.log(maths.toLocaleString())// it will be used to add comma in the number
//=========================Math =========================
console.log(Math)
console.log(Math.abs(-4))// it will convert negative number to positive
console.log(Math.round(4.6))// it will round the number
console.log(Math.ceil(4.1))// it will round the number to upper value
console.log(Math.floor(4.9))// it will round the number to lower value