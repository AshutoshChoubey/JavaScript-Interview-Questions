console.log("comes from worker",self.navigator);
// onmessage=(recevedData)=>{
//     var reverse = recevedData.data.split("").reverse().join("");
//     postMessage(reverse);
// }
addEventListener("message",(recevedData)=>{
       var reverse = recevedData.data.split("").reverse().join("");
    postMessage(reverse); 
})