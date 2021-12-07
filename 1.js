// function xyz() {
   
//     console.log(a); 
//     console.log(b);
   
//     let a = 10
//     var b = 20
// }
// xyz();
// excution context
// this
// referece type
// closer
// object , array , function prototype
// function init() {
//     name = 'Mozilla2'; // name is a local variable created by init
//   return  function displayName() { // displayName() is the inner function, a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   name="abc";
//   var funA=init();
//   funA();
console.log(a);
var a =20;
function myFirstFuntion(){
  console.log("i am inside function",b);
  var b=10;
  console.log("i am inside function",b);
}
myFirstFuntion()