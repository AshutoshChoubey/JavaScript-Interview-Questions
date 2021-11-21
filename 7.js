// What are the possible ways to create objects in JavaScript
//1. Object Constructor

 var obj= new Object();
obj.js="worldgyan"
 console.log(obj.hasOwnProperty("js"));
console.log(obj);


// obj1= Object.create(null);
// console.log(obj1);

// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };

//   const me = Object.create(person);

//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//me.isHuman = true; // inherited properties can be overwritten

//me.printIntroduction();
//   console.log("person",person)
//   console.log("Me",me)
// expected output: "My name is Matthew. Am I human? true"
//   oco = Object.create( {} );   // create a normal object
// ocn = Object.create( null ); // create a "null" object

// console.log(oco) // {} -- Seems normal
// console.log(ocn) // {} -- Seems normal here too, so far

// oco.p = 1; // create a simple property on normal obj
// ocn.p = 0; // create a simple property on "null" obj
// console.log(oco) // {p: 1} -- Still seems normal
// console.log(oco.hasOwnProperty("p")) // {p: 0} -- Still seems normal here too. BUT WAIT...
// function Person(name) {
//   this.name = name;
//   this.age = 26
// }
// Person.prototype.place = "india";
// var obj = new Person("worldGyan");
// console.log(obj.place);
class Person {
  constructor(name) {
    this.name=name
  }
}
var obj= new Person("WorldGyan");
console.log(obj);

var object = new function(){
this.name="sd"
};
console.log(object);