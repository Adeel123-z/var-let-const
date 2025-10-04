//There are two types of database in javascript
//1. Primitive data types
//2. Reference data types
//Primitive data types:(Call by Value)which means that jab hum es ko call karta hain to actual value copy nahi hota balke us ki copy hota hain
// There are 7 types of primitive data types
//1.String
//2.Number
//3.Boolean
//4.Undefined  
//5.Null
//6.BigInt
//7.Symbol
//Symbol jab hum na kese cheeze to unidue identity dena ho to hum symbol use karta hain
let id = Symbol("123")
let id2 = Symbol("123")
console.log(id==id2)
//Reference data types:(Call by Reference)which means jab hum es ko call karta hain to actual value copy hota hain
// There are 3 types of reference data types
//1.Array 
//2.Object
//3.Function
//Array
let arr=["Pakistan","India","China"]
console.log(arr[1]);
//Object
{
    name="Adeel Ahmed";
    age=20;
}
let abc=function(){
    console.log("Hello World");
}
abc();