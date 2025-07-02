// function welcomeMessage(){
//     console.log("welcome to MRECW");
// }
// function add(a,b){
//     return a+b;
// }
// const mul=(a,b)=>(a*b);
// console.log(mul(5,6));
// const greet=()=>("hai");
// console.log(greet())
function findOddOrEven(num){//traditional way
    if(num%2==0){
        confirm.console.log("even");
    }else{
        console.log("odd");
    }
}
const OddOrEven=(num)=>{//by using arrow function
    if(num%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
findOddOrEven(123);
OddOrEven(20);