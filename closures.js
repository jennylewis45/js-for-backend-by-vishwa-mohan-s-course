//a form of lexical scoping used to preserve variables from 
//the outer scope of a function in the inner scope of a function.


// function outerfn(){
//     let outerVar="i am the outerfn"

//     function innerfn(){
//         console.log(outerVar)
//     }
//     return innerfn
// }
// let fn=outerfn()
// fn()



//closures jab use hoty h jb hmen encapsulation krni ho yani 
//koi aisa data jo private kr k b hm usy use krsken.



//closures ki aik example code k sth.
function customerCounter(){
    let count=0
    return function(){
        count++
        console.log("new customer count is ",count)
    }
}
let count=customerCounter()
count()
count()
//ab hm jitni dafa count ko call krege woh utni dafa console dedega.


//jab datahiding encapsulation wghera krna hota h tab hm closures ko use krty h.

