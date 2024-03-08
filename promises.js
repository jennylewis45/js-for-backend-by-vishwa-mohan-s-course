// const myPromise = new Promise((resolve, reject) => {
//   let parentsPromise =true;

//   if (parentsPromise) {
//     resolve("yes");
//   } else {
//     reject("no");
//   }
// });

// myPromise
//   .then((msg) => {
//     console.log("my message:", msg);
//     console.log("yes,ok");
//   })
//   .catch((msg) => {
//     console.log("my message:", msg);
//     console.log("no, sorry");
//   }).finally(()=>
//     console.log("chalo aik side hogye ab..")
//   )

 //resolve or reject mai aik say ziada arguments b askty h lekin phr hmen .then or .catch mai b do hi
 //arguments deny hongy.

 //is mai finally aik aisa part hota h jo her time par chlna hi chlna h aya promise reject ho ya resolve.


 const f1Promise=new Promise((resolve,reject)=>{
setTimeout(() => {
  if(Math.random()>0.5){
    resolve("frnd1 yay i am going to islamabad")
  }else{
    reject("frnd1 no i am not going my exams are near")
  }
}, 2000);
 })

 const f2Promise=new Promise((resolve,reject)=>{
setTimeout(() => {
  if(Math.random()>0.5){
    resolve("frnd2 yay i am going to islamabad")
  }else{
    reject("frnd2 no i am not going i am not at home")
  }
}, 1000);
 })

 const f3Promise=new Promise((resolve,reject)=>{
setTimeout(() => {
  if(Math.random()>0.5){
    resolve("frnd3 yay i am going to islamabad")
  }else{
    reject("frnd3 no i am not going bcz my office is not going to give me off.")
  }
}, 3000);
 })
 Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
  console.log(msg)
  console.log("yay we are going to islamabad")
 }).catch((msg)=>{
  console.log(msg)
  console.log("end up the plan...")
 })






