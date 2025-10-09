//============Arrays Intilization==================
const myarr =[1,2,3,4,5,6]
console.log(myarr)
const myarr2=["Adeel","Ahmed","Sherry",3]
console.log(myarr2)
//============Array Methods==================
console.log(myarr.length)// it will show the length of the array
console.log(myarr.push(9))// it will add the element at the end of the array and also show the length of the array after adding
console.log(myarr.pop(2))
console.log(myarr.unshift(8))// it will add the element at the start of the array and also show the length of the array after adding
console.log(myarr.shift())// it will remove the element at the start of the array and also show the element which is removed
console.log(myarr.slice(1,3))// it will show the element from index 1 to 3 but not include 3
console.log(myarr.splice(1,3))// output[ 1, 5, 6 ]

console.log(myarr)
