for(var i=0;i<3;i++){
    console.log("outside of setTimeout",i); //0,1,2
    setTimeout(()=>{
        console.log("setTimeout",i); //3,3,3
    },1000)
}

for(let i=0;i<3;i++){
    console.log("outside of setTimeout",i); //0,1,2
    setTimeout(()=>{
        console.log("setTimeout",i); //0,1,2
    },1000)
}