// Functions

function myFunction()
{
    console.log("Welcome to my js tutorial ");
    console.log("We are learning fundamentals of Js ");
}

myFunction();

function number(num,str) // here num is a parameter which takes input
{
    console.log(num);
    console.log(str);
}

number(76,'this is string'); // here 76 is argument


function sumof2(num1,num2){
    console.log(num1+num2);
}

sumof2(55,48);

function add2(num1,num2){
    return num1+num2;
}

console.log(add2(4,8));

// Arrow Functions 
// compact way of writing a function

/*
const functionName = (param1, param2,...) => {
    //write your code    
}
*/

const arrowSum = (x,y)=>{
    console.log(x+y);
}

arrowSum(34,54)

const arrowmul = (x,y)=>{
    return x*y;
}

// console.log(arrowmul(5,4));
let b =arrowmul(5,4);
console.log(b)