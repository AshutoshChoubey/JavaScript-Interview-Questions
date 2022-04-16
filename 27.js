let pro = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("resolve")
    },10000)
    //resolve("resolve2")
    reject(new Error("error from promise"))
})
pro.then(data=>{
    console.log(data)
},err=>{
    console.log(err,"err")
})
