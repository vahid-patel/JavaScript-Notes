//Filter method

// creates a new array of elements that give true for a condition/filter.
// Eg : all even elements

arr =[1,2,3,4,5,6,7,8,9,10];


let newArr = arr.filter((val)=>{
    return val%2==0;
})

console.log(newArr)

// Reduce method 
// Performs some operations and reduces the array to a single value. It returns that single value.

let newval=arr.reduce((res,curr)=>{
    return res +curr;
})

console.log(newval)

let largenum = arr.reduce((res,curr)=>{
    return res >curr? res: curr;
})
console.log(largenum)