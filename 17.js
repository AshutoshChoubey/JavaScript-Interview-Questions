//find the element with highest occurrence in an array
var input = ["a", 1, 2, "b", 1, 1, 4, 6, 1, "a", 2]
// 1 cout 4

// loop
var obj = {} //{a:1,1:3,2:1,b:1,4:1}
var valueWithMaxOcc = 0;//"1" 
var maxOcc = 0; //3

// loop
// if value not exist in object 
//then store value in Object with default count 1
//else increase the count of exiting value to 1

// if array value is more than maxOcc then reasigne 
// that value in valueWithMaxOcc variable

input.forEach((value, index, oArr) => {
    if (obj[value]) {
        obj[value] += 1;
    }
    else {
        obj[value] = 1;
    }
    if(obj[value]>maxOcc)
    {
        valueWithMaxOcc= value;
        maxOcc=maxOcc+1;
    }

})

console.log(obj);
console.log(valueWithMaxOcc+"count:"+maxOcc);

var output= input.reduce((pre,curr,index,oArr)=>{
    return oArr.filter(val=>val===curr).length > oArr.filter(val=>val===pre).length ? curr :pre
},0)
console.log("output:",output)
// oArr.filter((val)=>{
//     return val===curr
// })