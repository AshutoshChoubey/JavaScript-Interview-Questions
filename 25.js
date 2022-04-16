// What is memoization
const memoAdd =()=>{
    let cache={}
    return (num)=>{
        if(num in cache){
            console.log("result from  cache condition",cache)
            return cache[num]
        }
        else{
            console.log("result after compuation")
            let result = num+1
            cache[num]=result;
            return result;
        }

    }
}
const addionWith1=memoAdd()
console.log(addionWith1(10))
console.log(addionWith1(11))
console.log(addionWith1(11))