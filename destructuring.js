//yani kisi array ya object main sy values ko nikalna or variables ko assign krna destructuring kehlta h.
// const nums=[1,2,3,4]
// const [b,a,c,d,e]=[1,2,3,4]
// console.log(a)
// console.log(b)
// console.log(c)
//  console.log(d)
//  console.log(e)
 //yaha sab sai chalega q k her value variable ko assign hojegi par jab hm a ko define ni krege lekin
 //console krege tou error ayega refrence error.
 //or ager hm e define ni krty yani usko koi value 1,2,3,4 kr k koi value ni dety or console krty
 //tou undefine ayega.


//agr hmry pas nested array yani array k ander array h tou aisay krenge.
// const [p,q,r]=[6,7,[78,98,10]]
// console.log(p)
// console.log(q)
// console.log(r)



//agr hmen objects ki destructuring krni h tou aisay krege
//for example
// const per={
//     name:"Javeriya",
//     age:20,
//     address:{
//         city:"karachi",
//         location:"Pakistan"
//     }
// }
// const {name,age,address:{city,location}}=per
// console.log(name)
// console.log(age)
// console.log(address)
// console.log(city)

//agr koi key ni milegi tou undefine ayega q k woh object mai usy milegi hi ni.
//variable names should match with the keys of the object.

//agr hmry pas aik nested object h tou aisy krenge.
//or agr hmen nested object ki koi aik key chahiye tou aisay 
//krege uska aik object pas krdege us main uski keys rkhege
//or console.log krwalenge.
