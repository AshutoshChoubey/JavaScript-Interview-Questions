var arry = [
  {
    name: "ashutosh",
    marks: {
      java: 40,
      english: 30,
      php: 67
    }
  },
  {
    name: "vishal",
    marks: {
      math: 40,
      javascript: 30,
      php: 67,
      hindi: 89,
    }
  },
  {
    name: "rahul khan",
    marks: {
      math: 40,
      html: 30,
      php: 67,
      bangla: 21,
    }
  },
  {
    name: "Pransant",
    marks: {
      math: 40,
      english: 30,
      bangla: 21,
    }
  }];
// ans [{name:"",avagMark:0,maxMakrInSub:0,totalMarks:0,subjsctHighMarks:""}]
// 1,2,3,4,5

var newArray = arry.map(arry => {
  for (const key in arry.marks) {
    console.log(arry.marks.english);
  }

  max = getMax(Object.values(arry.marks)); // getting max  value
  sum = Object.values(arry.marks).reduce((a, b) => a + b); // sum value
  return { name: arry.name, avagMark: (sum / (Object.keys(arry.marks).length)).toFixed(2), maxMakrInSub: max, totalMarks: sum }
});
//console.log(newArray);
//var arr1 = [];

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];

//   }
// }

// for (let i = 0; i < arry.length; i++) {
//   console.log(Object.values(arry[i].marks));
//   console.log(getMax(Object.values(arry[i].marks))); // getting max  value
//   console.log(Object.values(arry[i].marks).reduce((a, b) => a + b)); // sum value

// }

function getMax(a) {
  var maxVal = a[0];
  for (let i = 0; i < a.length; i++) {
    if (maxVal < a[i]) {
      maxVal = a[i];
    }
  }
  return maxVal
}
function getSum(arr) {
  return arr.reduce((a, b) => a * b)
  // var avg = 0
  // for (let i = 0; i < arr.length; i++) {
  //   avg = avg + arr[i];
  // } 
  // return avg;
}