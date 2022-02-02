// What is the purpose of the array slice method
// What is the purpose of the array splice method
// var arr=[1,2,3,4,5,6,7]
// console.log(arr.slice());
// console.log(arr.slice(-2,-1)); 
// console.log("Original",arr);

var arr=[1,2,3,4,5,6,7]
console.log(arr.splice(2,-1));
console.log("Original",arr);

































// Slice	                                           , Splice,
// Doesn't modify the original array(immutable) , Modifies the original array(mutable)
// Returns the subset of original array	     , Returns the deleted elements as array
// Used to pick the elements from array	     , Used to insert or delete elements to/from array