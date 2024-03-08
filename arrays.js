//a type of global object that are used to store data called arrays.
//is main order index k through maintain hota h.
//arrays ka apna koi type ni hota woh itself object hi hota h.

//arrays
// arr=[1,2,3]
// console.log(arr)
// console.log(typeof arr)

// arr1=new Array()
// console.log(arr1)




//arrays ko b indexk zariye target krty h
//for example
// arr=[1,2,3,4,5,6,7,,9,10]
// console.log(arr[9])
// console.log(arr[18])
//agr mai sai index likhongi jo exist krti h array main tou woh element ajega werna ghalt index par undefine ayega.

//arrays mutable hoti h hm is main edition krskty h 
//for example
// arr[1]=200
// console.log(arr)
//jesy main nay yaha kiya h arr[1]=200 tou ab yaha par 1 index k oper 2 ni balky 200 hogaya h tou arrays mutable hoti h
//us amin edition hoskta h.




//arrays k method h ya.
//push
// arr=[1,2,3,4]
// console.log(arr)
// arr.push(11,12,13,14)
// console.log(arr)//hm push k through aik or aik say ziada elements add krskty h.
//is main ya hota h k jo no ya element hm add krty h woh push method k through array k last main ajata h
//jesy yaha par 1,2,3,4 k baad 11 laga h.



//ya pop h is main array say last ka aik element remove hojata h aik ya aik say ziada jitny apny krny ho index k through 
//ap krskty h.
// arr=[1,2,3,4]
// console.log(arr)
// arr.pop()
// console.log(arr)



//agr hmen kuch start main add krna h array k tou unshift say krenge.
// arr=[1,2,3,4]
// arr.unshift(13,2000,2003)
// console.log(arr)






//shift k sath hm array k start main say koi b element remove krskty h.
// arrays=[22,32,42,52]
// arrays.shift()
// console.log(arrays)


//arrays ko concat krny ka treeka.
// let array1=[1,2,3,4,5]
// let array2=[6,7,8,9,10]
// let array3=array1.concat(array2)
// console.log(array3)



//array ki length find krny ka treeka.
// console.log(array1.length)//length aik property h jo strings ki ya array ki length ya size find krny k liye hoti h.




//join method in arrays.
// arr2=['J','a','v','e','r','i','y','a'," ",'K','h','a','n']
// console.log(arr2.join())
// console.log(arr2.join(""))
// console.log(arr2.join("$"))//agr hm yaha dollar ka sign lagdega tou ya hmen dollar ka sign as a space dekhyega.
//ager hmen arrays ko join krna h tou is tarah hoga woh
//agr hm seperator yani comma wala kam ni krenge tou pehly 85 line wala
//jo result h us mai her letter k bad comma lga hua h
//or 86 line main comma lagny k baad Javeriya Khan aisay likha hua ayega.
//ya hota h join method. 



//toString ka method b yahi krta h arrays ko join krdeta h.
// arr2=['J','a','v','e','r','i','y','a'," ",'K','h','a','n']
// console.log(typeof arr2.toString())



//slicing an array arrays main slicing kesy hoti h.
// let nums=[1,2,3,4,5,6,7,8,9,10]
// console.log(nums.slice(2))
// console.log(nums.slice(2,7))
// console.log(nums.slice(5,-1))
// console.log(nums.slice(-9,-2))
// console.log(nums.slice(2,-1))
// //slicing ka method kuch b change ni krta existing array main.
// console.log(nums)



// let numbers=[1,2,3,4,5]
// let removed=numbers.splice(2,5)
// console.log(removed)
// console.log(numbers)

//splice main hm remove k sath add b krskty h.

// let numbers1=[22,33,4,78,90,45]
// let removed=numbers1.splice(2,2,11,67,8,10)
// console.log(removed)
// console.log(numbers1)
//yaha ya hua h k 2,2 yani main 2 index say niklna start kiya h or 2 hi elements ko array sy nikldiya h
//usky baad main nay 11,67,8,10 k add krwya h.
//slicing krny say hmari existing array main change ajata h.


//reverse method in arrays
// let nums=[3,4,5,6]
// console.log(nums.reverse())



//indexOf method say hm kisi b array ka index par yaani is index par konsa element h woh find krstky h.
// let nums=[3,4,5,6]
// console.log(nums.indexOf(5))//indexOf hmen element ki index btata h.



//sorting method
// let myarr=[15,40,1,13,2]
// myarr.sort()
// console.log(myarr)
//sorting main ya hota h k jo numbers jumbled yani agy peechy hoty h woh order main ajaty h by using sort method.
//ya sorted order mai ni aya h ab hm isko arrow function ki form mai banaege.
//for example
// let myarr=[15,40,1,13,2]
// myarr.sort((a,b)=>a-b)
// console.log(myarr)


//ager hmen sorted array ko hi reverse krna hoga tou aosy krege
//for example
// let myarr=[15,40,1,13,2]
// myarr.sort((a,b)=>b-a)
// console.log(myarr)
