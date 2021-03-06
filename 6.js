// If the new keyword is used when calling the function, this inside the function is a brand new object.
// If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.
// If a function is called as a method, such as obj.method() — this is the object that the function is a property of.
// If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.
// If multiple of the above rules apply, the rule that is higher wins and will set the this value.
// If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.

// If the new keyword is used when calling the function, this inside the function is a brand new object.
// function Test(){
//     console.log(this)
//     this.rule1="ok";
//     console.log(this.rule1);
// }
//  var rule1 = new Test()
//  console.log(rule1);

// If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.
//  function a(a)
//  {
//      console.log(this);
//  }

//  var bindFun = a.bind({value:3},"abc");
//  bindFun();
//  a("bvc");
// If a function is called as a method, such as obj.method() — this is the object that the function is a property of.

var test ={
    prop1 : "ok",
    prop2 : 4,
    func1 : function () {
        console.log(this)
    },
    func2: () =>{
        console.log(this)
    }
}
test.func1();

function Test(){
    this.prop1 = "ok";
    this.prop2 = 4;
    this.func1 = function () {
        console.log(this)
    };
    this.func2= () => {
        console.log(this)
    }
    console.log(this)
}
var test= new Test();
test.func2();