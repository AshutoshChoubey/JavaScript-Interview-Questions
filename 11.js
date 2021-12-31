const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5,2]);
console.log(obj);
console.log(set);
console.log(obj.hasOwnProperty('1'));
console.log(obj.hasOwnProperty(1));
console.log(set.has('1'));
console.log(set.has(1));
// Given two arrays, return all unique values from both the arrays contained in the third array.
var arr1=[2,3,"worldgyan","100",5];
var arr2=[11,2,3,"worldgyan","100",5,7,10,"subscribe"];

//  var arr3= );
 console.log(Array.from(new Set(arr1.concat(arr2))))
// console.log(arr3.filter((val,index,orrArr)=>{
//     if(orrArr.indexOf(val)==index){
//         return val
//     }
// }))
//console.log(arr3);
// [11,2,3,"worldgyan","100",5,7,10,"subscribe",2,3,"worldgyan","100",5]
// var arr4=[];
// for(let i=0;i<arr3.length;i++)
// {
//     console.log("if("+arr3.indexOf(arr3[i])+"=="+i)
//     if(arr3.indexOf(arr3[i])==i)
//     {
//         arr4.push(arr3[i])
//     }
// }
// console.log(arr4);

