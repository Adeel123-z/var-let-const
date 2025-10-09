const marvelHeroes1 = ["Spiderman", "Ironman", "Hulk", "Thor"];
const dcHeroes1 = new Array("Superman", "Batman", "Flash", "Aquaman");
const allHeroes = marvelHeroes1.concat(dcHeroes);
console.log(allHeroes);
// Another Example of push
const marvelHeroes = ["Spiderman", "Ironman", "Hulk", "Thor"];
const dcHeroes = new Array("Superman", "Batman", "Flash", "Aquaman");
marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);
//An Array inside an Array
const newArray = [1,2,3,[4,5,6],7,[8,9]];
const anotherArray = newArray.flat(Infinity);
console.log(anotherArray);
console.log(Array.from("Adeel"));
//.of
let score1= 200
let score2= 300
let score3= 400
console.log(Array.of(score1,score2,score3));