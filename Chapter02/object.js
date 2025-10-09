const user2={
    name:"Hamza",
    age: 23,
    email:"hamza123@gmail.com",
    City:"Chakwal",
}
console.log(user2);
const symb = Symbol("Key");
const user ={
    name:"Adeel Ahmed",
    age: 22,
    email:"adeel123@gmail.com",
    City:"Islamabad",
    [ symb] :"myvalue"
}
user.name="sherry"
console.log(user.age);
console.log(user["age"]);
console.log(user);