// const user={
//     name:"Javeriyah",
//     age:20,
//     city:"Karachi"
// }
// console.log(user.name)
// console.log(user['name'])
//is main say aik .notation method h or aik square bracket method h donon say mujhy name retrieve hojega//
//bs is main mujhy square brackets or single commas use krny prenge.


//aisay hi hm add b krskty h objects main values donon trah say notation say b or square bracket say b
// user.location="Pakistan"
// user["food"]="burger"
// console.log(user)


//hm delete b krskty h koi si b key
// delete user.location
// console.log(user)//by using dot notation
// delete user['food']
// console.log(user)//by using square bracket method.



//iterate kese kren objects main yaani kese kisi b key ko object say kese niklen
let person={
    name:"Javeriyah",
    age:20,
    
    address:{
        city:"Karachi",
        state:"Pakistan",
        country:"Pakistan"
    }
}

for(let key in person){
    // console.log(key)//is tarah say hmen bs keys milengi
    // console.log(key,"=>",person[key])//or is tarah say hmen keys or values donon miljyegi.
}

// console.log(Object.keys(person))//aisay kerny say b hmen keys miljyegi object ki.
// console.log(Object.values(person))//aisy krny say b hmen keys ki values miljyengi.
//ya dono ways han hm is say find krskty h keys or values.

//ager hmen keys or values dono chahiye tou enteries k through krenge.
//for example
// console.log(Object.entries(person))

//cloning an object using assign which is a keyword.
//aj ki world of js main hm bilkul b bar bar objects banana ni chahege tou is liye
//hm ya treeka use krenge.

//for example
const new_Person=Object.assign({},person)
console.log(new_Person)


//agr hmen new person ko jo hmny purany person say create kiya tha usko koi new key deni h tou aisy denge.
//for example
const new_Person1=Object.assign({},person,{key:"Developer",food:"Burger",favoorite_color:"white"})
console.log(new_Person1)