// Ways to Clone Objects in JavaScript
// var a=10;
// var b=a;
// b=20
// console.log(a,b)

var obj1 = {
    "key": "val1",
    "key2": "val2",
    "obj2" : {
        "a": "val3",
        "b": "val4"
    },
}

var obj3=obj1;
obj3.key="chnagedValue";
console.log(obj1,obj3);
var obj4= Object.assign({},obj1);
obj4.key="obj4Value";
obj4.obj2.a="obj4Value a";
console.log(obj1)
console.log(obj4)
var obj5= {...obj1};
obj5.key="obj5"
obj5.obj2.a="comes from the obj5 a"

console.log(obj1,obj5);

var obj7 = JSON.stringify(obj1)
var deepCopy= JSON.parse(obj7);
deepCopy.obj2.a="deepCopy key"
console.log(obj1,obj7,deepCopy);
// Primitive Values
// number
// string
// boolean
// undefined
// null
// symbol

// Reference Values
// anything that is "typeof" "object"
// objects
// arrays
// functions



