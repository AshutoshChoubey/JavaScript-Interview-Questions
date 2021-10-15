function xyz() {
    let i = 0;
    return function () {
        console.log(i++);
    }
}
xyz()(); //0
let funA = xyz();
funA();//0
funA();//1
funA();//2
xyz()();//0