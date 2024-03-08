//functions main 2 chezen picular hoti h parameters or return yani parameters or return dono hi 
//primitives or objects dety h hmen.
//tou jis function mai hmen return or parameters main primitives or objects mily aisy
//function ko hm 1st order function khty h.

//higher order function woh function h jis mai hm parameter mai function pas krskty h or return mai b function mil
//skta h woh higher order function hota h.

//operator function is a function which takes 2 arguments.


//example of higher order function(HOF)
     //yaha pr operation function higher order function h.

    //  function operation(operatorFn ,a, b){
    //     return operatorFn(a,b)

     //}

//      function subtract(a,b){
// return a-b
//      }
// let result =operation(subtract,15,5)  //phr jab hm is function ko call krege tou hm is k argument mai woh fn jo hmny 
                                      //bnya h usy call krege or 2 no.s dege jo hmny add ya subtract ya jo krna h 
                                      //usky liye.
// console.log(result) 
  


//aik or example h HOF ki.
//for example
// function greetMethod(){
//     return function(){
//         console.log("Hello Students")
//     }
// }
// let greetfn=greetMethod()
// console.log(typeof greetfn)
// greetfn()
//ab yaha mai nay aik order HOF bnaya h is mai b yahi h greet method h
//sb sy pehly function bnaege or return mai dosra function dedege aik anonymous function h ya
//phr hm greetmethod k function ko execute krny k liye aik or function banaega or phr greetfn ko b call krege tou
//greet ka console chaljyga.



//forEach method is a HOF.

//foreach JavaScript mein ek loop hai jo ek array ya collection ke har element par 
//iterate karta hai aur har iteration mein 
//ek function ko call karta hai. Ye loop code ko zyada readable banata hai 
//aur array elements par operations ko aasan banata hai.
//koi na koi logic apply kr rhi hoti h array k element par.

// games=["cricket","football","hockey","tennis"]
// games.forEach((games)=>console.log(games))




//mapping in js.
//creation of new transformmed array is called mapping.
//for example

// arr=[2,4,8,10]
// sq_arr=arr.map(num=>num**2)
// console.log(sq_arr)
// console.log(arr)
//mapping k time real wali array change ni hoti h woh wahi rehti h aik new array create hoti h 
//jo b hm krna chahty h us k liye.




//filter aik or HOF h
//for example
// arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let even_arr=arr1.filter((num)=>num%2==0)
// console.log(even_arr)



//filter aik or method HOF h.
//for example
// const sum=[1,2,3,4,5,6,7,8,9,10].reduce((curr,next)=>curr+next,0)
// console.log(sum)
