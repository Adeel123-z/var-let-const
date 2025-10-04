//Heap Memory or Stack Memory
//Heap Memory
//all primitive type are stored in stack memory meams ya ka jo value hote hai wo as it is use nahi hoti balke us ke copy use kia jata hai
//Example
let myName="Adeel Ahmed"
let myFriendName="Sherry"
myFriendName= "Zarish"
console.log(myName)
console.log(myFriendName)

// Stack Memory
let userOne={
    name:"Adeel Ahmed",
    email:"adeel@gmail.com",
    age:20
}
let userTwo=userOne
userTwo.email="sherry@gmail.com"
console.log(userOne.name)
console.log(userTwo.email)
