// async function getMessage(){   
    //yaha pr jesy hi hm function ko async krege woh hmen output pr promise object show krega.
//      return "hello everyone"
//  }

// getMessage().then((messsge)=>{
// console.log(messsge)
// })

//yaha pr async lagny k bd hmen promise mai milrha tha hello everyone usko reach krny k liye hm nay
//yahn pr .then ka use kiya h.

// function printHelloAfterWait(){
//     console.log("first line")
    
//     setTimeout(() => {
//         console.log("hello students")
//     }, 3000);

//     console.log("last line")
// }
// printHelloAfterWait()


//ya h async await ki example

console.log("hello from beginning")
async function hello(){
    console.log("first line")

    let data=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("hello students")
}, 3000);
    })

    let result=await data
console.log(result)
console.log("last line")
}

hello()
console.log("hello from end")
//await ka kam h to wait for the promise to resolve or reject.