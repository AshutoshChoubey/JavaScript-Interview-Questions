function main() {
  let arr = [1, 2, 3];
  console.log('Main Started'); // Main Started
  arr.forEach(async (value,index,oriArr) => {
    let res = await print(value);
    console.log(res); //
  });
  console.log('end'); // end
}

function print(value) {
  return new Promise((resolve) => {
    setTimeout((value) => {
      return resolve(value);
    }, 1000);
  });
}

main();











// string to interger
// variable typing in jvascript
// nul==unsefined
// function Outer(){
 
//    let val = 0;
//    return function(){
//      console.log(val++);
//    }
//  }

//  let obj = Outer();
//  obj();
//  obj();
//  obj();
 
//  Outer()();