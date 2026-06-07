let name = "Aryan"
let age = 25
let isStudent = true
let state;

//number -> 2 to power of 53 - 1
//bigint -> more than 2 to power of 53 - 1
//string -> usually enclosed within double quotes ("") or single quotes ('')
//boolean -> true or false
//undefined -> a variable that has been declared but not assigned a value
//null -> a variable that has been assigned a null value, indicating the absence of any object value
//symbol -> a unique and immutable primitive value that can be used as a key for object properties

console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isStudent) // boolean
console.log(typeof state) // undefined
console.log(typeof null) // object (this is a known quirk in JavaScript, null is actually a primitive value, but typeof returns "object")
console.log(typeof Symbol("id")) // symbol;
console.log(typeof undefined) // undefined
