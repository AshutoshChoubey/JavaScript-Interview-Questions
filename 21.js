// function a(x){
//  return function b(y){
//     return function c(z){
//      return x+y+z;
//     }
//  }
// }
// var sumFun=a(3)
// sumFun(5)
var xyz=(x,y,z)=>x+y+z;
console.log(xyz(1,2,3))
var xyzCarring=x=>y=>z=>x+y+z;
console.log(xyzCarring(1)(2)(6))

