// Function vs Method 

// example of method is 'abc'.toUppercase(), here toUppercase is a method
// if we associate a function with an object then it becomes method

// methods are a kind of funtion that are associated with other datastructure or object

// forEach Loop in Arrays

// forEach loop is also an method

// arr.forEach(callBackFunction)

// CallBackfunction : Here, it is a function to execute for each element in the array

// *A callback is a function passed as an argument to another function.

// In Js functions can be passed as parameters 
//example :
function abc(){ // Here abc() is CallBack Function
    console.log("helloo");
}

function myownfun(abc) // this is HOF
{
    return abc;
}

// Example of forEach loop

let arr=[1,2,3,4,5,6,7,8,9];

arr.forEach(function printVal(val){ // val is value at each index
    console.log(val);
})

arr.forEach((val)=>{
    console.log(val);
})

// Higher Order Function/methods(HOF/HOM)
// HOM are the functions which takes other functions as parameters or returns other functions
//forEach loop is HOM