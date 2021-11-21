var input = 
[
	{"name": "Star Plus", "category": "Entertainment"},
	{"name": "Star News", "category": "News"},
	{"name": "Times Now", "category": "News"},
    {"name": "cricket", "category": "sports"},
]
// var output = 
// {
// 	"News": ["Star News", "Times Now"],
// 	"Entertainment": ["Star Plus"]
// }
var output=input.reduce((previous,val)=>{
    let { name,category}=val;
    console.log(previous);
    if(!(category in previous))
    {
        previous[category]=[]; 
    }
    previous[category].push(name);
    return previous;
    
},{})
console.log(output);



// function execute(input){
    // var output={};
    // input.forEach((val,index,orrA)=>{
    //     let { name,category}=val;
    //     if(!(category in output))
    //     {
    //         output[category]=[]; 
    //     }
    //     output[category].push(name);
    //     //console.log(name);
    // })
//     return output;
// }
// console.log(execute(input));


