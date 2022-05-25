// function* generator(val){
//     yield val;
//     yield val*2;
//     yield val*3;
//     // return val*5;
//     // yield val*10
// }
// const gen = generator(1)
// console.log(gen.next().value)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// for(let value of generator(2)){
//     console.log("value",value)
// }
// function* nextN(){
//     var ini=1
//     while(true){
//         yield ini++ ;
//     }
// }
// var gen = nextN()
// for(var i=0;i<10;i++){
//     console.log(gen.next().value)
// }
// var arr=[1,2,3,4]
// function* gen(a){
//     yield* a
//     // while(i<arr.length){
//     //     yield a[i++]
//     // }
// }
// const it=gen(arr)
// for(let value of it)
// {
//     console.log(value)
// }
// function* fg(){
//     yield 1
//     yield 2
//     yield 3
// }
// function* sg(){
//     yield 4
//     yield* fg()
//     yield 5
// }
// for(let value of sg())
// {
//     console.log(value)
// }

function* gen(array){
//    array.forEach(element => {
       yield* array;
//    });
}
var arr=[1,2,3,4]
const it=gen(arr)

for(let value of it)
{
    console.log(value)
}
