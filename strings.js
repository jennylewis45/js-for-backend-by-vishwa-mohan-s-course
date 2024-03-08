//a sequence of one or more characters that may consist of letters, numbers, or symbols
//ya singal quote mai b hota h or double quote mai b hota h.

// let name='Javeriyah'
// console.log(name)
// console.log(typeof name)
//hum type b find krskty h or index b 
//index find krny ka treeka.

//string immutable hota h yani us  ain kuch b naya add ni hoskta 
//for example
// name[2]="M"
// console.log(name)


//ya strings k kuch methods h
// console.log(name.length)

//concat method
//  let first="Javeriya"
// let last=" Khan"
// console.log(first.concat(last))
//aisay b 2 strings apas main jur (add)skti h or ya + sign wala method b hoskta h.

// console.log(first +""+ last)

//hum isko uppercase mai b krskty h.
//for example
// console.log(first.toUpperCase())
// console.log(last.toUpperCase())


//hum character konsay index par konsa character h aisay b find krskty h
//for example
// console.log(first.charAt(4))





//slicing methods
//slicing main hum index k through elements nikal skty h isko slicing kehty h.
// let first="Javeriya"
// console.log(first)//ya tou simple console.log print hoga.
// console.log(first.slice(2))//yaha second index say print hona start hoga.
// console.log(first.slice(-5))//ya ulti index h right to left say h yani tou ya -1 ,-2,-3,-4 aisy hoti h.
// console.log(first.slice(-5,-1))//ya b aisay hi hogi -5 say chlegi lekin -4 tk jyegi -1 ni ayega is maim.
//right to left negative indexing or left to right positive indexing hoti h.


//aik or method string ka indexOf hota h ya hmen character ki index batata h k ya character kis index par h.
//for example
// console.log(first.indexOf('J'))
//agr hm sai character likhege jo hamrey string mai hoga tou index batayega or ager invalid character enter krege
//tou hamen -1 milega q k woh string main h hi ni isliye.



//ek or method h triming ka ya space wghera khatam krta h words k darmiyan ya start wghera mai.
//for example
// let word="    table     chair "
// console.log(word)
// console.log(word.trim())


//split ya hmen array of string dedega.
//for example
// let names="Javeriya Imran Khan"
// console.log(names)
// console.log(names.split(" "))
//ya split krdega string ko array ki form main hmen bss seperator lagana hota h seperator yani space bar say.
//agr hm space denge tou ya array of words dega or space ni dege tou array of characters dega.