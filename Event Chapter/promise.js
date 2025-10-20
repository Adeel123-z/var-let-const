 //Create
 const promiseOne =new Promise(function(reject,resolve)
{
    setTimeout(function(){
  console.log(`Async task is compelete`);
  resolve();
    },5000)
})
//Consumption
promiseOne.then(function(){
    console.log("Promise consumed")
}).catch(function(err) {
    console.error('Promise rejected', err);
});
//Second Exzmple
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
})
.then(function () {
    console.log("Async task 2 is completed");
});
promise three
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({
        username:"Chai",email:"adeel@gmail.com"
    })
    },1000)
})
promiseThree.then(function(user){
    console.log(user);

})
const promiseFour = new Promise(function (reject, resolve) {
    setTimeout(function () {
        let error = false;
        if (!error) {
       resolve({username:"Adeel Ahmed",email:"adeel451@gamil.com"})
        }
        else {
            console.log(`ERROR ! SomethinG Went Wrong`)
        }
    }, 1000)
})
promiseFour.then(function (user) {
    console.log(user);
  return user.username
})
.then(function(username){
  console.log(username);
})
.catch(function(error)
{
    console.log(error);
    
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
    
})
Handle Promise By Async and await
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({
                userName:"Adeel Ahmed",password:"adeel"
            })}
            else{
               reject(`ERROR!:Something Went Wrong`)
            }
    },1000)
})
async function consumepromiseFive(){
    const response=await promiseFive
    console.log(response);
    
}
consumepromiseFive()