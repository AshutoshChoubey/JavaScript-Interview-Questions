var shap ={
    radius:2,
    diameter(){
        return 2*this.radius;
    },
    perimeter:()=>{
        return 2*Math.PI*this.radius;
    }
}
console.log(shap.diameter());
console.log(shap.perimeter());