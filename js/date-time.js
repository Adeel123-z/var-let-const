//Dates
let myDate = new Date()
console.log(myDate)//2025-10-09T05:43:50.531Z
console.log(myDate.toString())//Thu Oct 09 2025 10:43:50 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString())//Thu Oct 09 2025
console.log(myDate.toISOString())//2025-10-09T05:43:50.531Z
console.log(myDate.toLocaleString())//09/10/2025, 10:43:50 am
console.log(myDate.toLocaleDateString())//09/10/2025
console.log(myDate.toLocaleTimeString())//10:43:50 am
console.log(typeof myDate)//type of myDate is object
let myCreatedDate =new Date(2025,9,9,10,49,35)
console.log(myCreatedDate.toLocaleString())
//in js the month willbe start from 0 so 0 is jan and then move on(the reason of starting from 0 is that it is based on the array)
console.log(myCreatedDate.toDateString())
let myDateis =new Date("2023-01-25")
console.log(myDateis.toDateString())
//===========Timestamp=================
let myTimeStamp = Date.now()
console.log(myTimeStamp)//it will show the time in milliseconds
console.log(Date.now()/1000)//it will show the time in seconds
console.log(Math.floor(Date.now()/1000))//it will show the time in seconds without decimal
