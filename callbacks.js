//callbacks are the arguments whcih we pass to another function.
//ya asynchronous mai use hota h.

function greet(name,callback){
    const greeting="Hello "+name
    callback(greeting)
}
function displayGreeting(message){
    console.log(message)
}
greet("Javeriyah",displayGreeting)
//is mai callback function displaygreeting h.



//callback hell or pyramid of doom 
//iska matlab h jab hm aik callback kander callbacks banty jty h yani nesting of callbacks 
//woh b code ki readability ko khrb krta h or errors aaty h tou ya b theek ni h or isy hi hm callback hell khty h.