// Some more Array Methods

// Map 
// Creates a new array with the results of some operation. The value its callback returns are used to form new array

// arr.map(callbackfnx(value,index,array)) 

let arr=[1,2,3,4,5,6,7,8,9,10];

arr.map((val)=>{
    console.log(val)
})

let newArr = arr.map((val)=>{
    return val*val;
})

console.log(newArr)