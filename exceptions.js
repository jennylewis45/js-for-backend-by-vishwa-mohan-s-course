//syntax error
//console.log("hello
//ya h syntax error ya error h exception ni h.


//runtime exceptions.
// let x=5
// console.log(x.toUpperCase())
//ya exception case h.


//logial

// let num=5
// for(i=-3;i<5;i++){
//     console.log(num/i)//logical error is dividing by zero.
// }

//yahn koi exception dikh ni rha h but ya infinity sai ni h


//in errors ko smbhlny k liye js mai try catch hota h.

// let obj=undefined
// console.log(obj.name)


// let obj={ //wese tou hm aisay krlenge lekin ayha tou hmen error handling krni h na tou hm try catch ko istaml krege.
// name:"javeriyah",
// age:20
// }
// console.log(obj.name)

//tou ab ya aisy hoga try catch k through
try{
    let obj=undefined
    console.log(obj.name)
}catch(err){
    console.log("exception handled")
    console.log(err)
}finally{
    console.log("i will always execute")
}
//yaha pr jo err h ya error k mutalliq information rkhta h apny pas.
//is tarh sy hm try catch ko use krty h.