// function foo() {
//     return {
//         message: "Hello World"
//     };
// }
// console.log(foo()); //Undefined

// function Vehicle(model, color, year, country) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }

// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }
// (function a(){
//     var y = 1;
//     // var ourFunc=function f(){}
//    function f(){}
//         y = y+ typeof f;
   
//     console.log(y);
   
// })()

// function foo() {
//     // y=10;
//     // let x=y;
//     let x = y = 0;
//     x++;
//     y++;
//     return x;
// }

//console.log(foo(), typeof x,x, typeof y,y);

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     constructor(width) {
//         this.width = width;
//     }
//     // Getter
//     get area() {
//         return this.calcArea();
//     }
//     // Method
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(20, 30);

// console.log(square.area); // 600

// console.log(0.1 + 0.2 == 0.3);


function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
        // Outer function context
        console.log(this.constructor.name); // User
        return function() {
            // Inner function context
            console.log(this); // User(Get it from the outer context)
            console.log("I'm " + this.name + ", " + this.age + " yrs old");
        };
    }
}

let user = new User('John', 25);
let profile = user.getProfile();
profile(); //I'm John, 25 yrs old

