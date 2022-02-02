// What is the purpose of the array slice method
// What is the purpose of the array splice method
// var arr=[1,2,3,4,5]
// console.log(arr.slice(2)) //[3,4,5]
// console.log(arr.slice(1,4)) //[2,3,4]
// console.log(arr.slice(0,3)) //[1,2,3]
// console.log(arr.slice()) //[1,2,3,4,5]
// console.log(arr.slice(-1)) //[]
// console.log(arr.slice(-1,-3)) //[]
// console.log(arr.slice(1,-2)) //[]
// console.log(arr) //[1,2,3,4,5]

var arr=[1,2,3,4,5]
// console.log(arr.splice(1,2,1.1,1.2,1.3)) //[2,3]
console.log(arr.splice()) //[3,4,5]
console.log(arr) 
































// Slice	                                           , Splice,
// Doesn't modify the original array(immutable) , Modifies the original array(mutable)
// Returns the subset of original array	     , Returns the deleted elements as array
// Used to pick the elements from array	     , Used to insert or delete elements to/from array