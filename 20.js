var a=function abc(){
console.log("first class")
}
a();
function firstOrder(){
    console.log("firstOrder")
}
firstOrder()
function hiderOrder(x){
    console.log("hiderOrder")
    return function(){

    }
}
console.log(hiderOrder(a))

