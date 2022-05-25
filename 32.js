const x = {num:10};
const mul=(y={...x})=>{

    console.log((y.num*=2))
   // y.num=y.num*2
    //20*2
//    y.num+=3
//    y.num=y.num+3
}
mul() //20
mul()//20
mul(x) //20
mul(x) //160
mul(x) //20
mul(x) //160