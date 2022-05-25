// function age(data) {
//     if (data == { age: 22 }) {
//         console.log("your age is 22")
//     }
//     else if(data === { age: 22 }){
//         console.log("you are adult")
//     }
//     else{
//         console.log("you does not have age 22")
//     }
// }
// age({ age: 22 })

// function a(...x){
//     console.log(x)
// }
// a(20)

// // console.log(eval('10*5+1'))
var obj= {a:"1",b:"2",a:"3"}
// obj.a=30
console.log(obj);// {a:"3",b:"2"}

for (let i = 10; i < 20; i++) {
    if (i == 13) {
        continue;
    }
    console.log(i)
}

var a= {}

// var x="age"
// a[x]=51
// a["age"]=50
// a.age=50
// console.log(a["age"])
var b ={key:"1"}
var c = {key:"2"}
a[b]=10;

a[c]=20;
console.log(a[b]);

