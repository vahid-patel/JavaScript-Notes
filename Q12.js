// Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.

let n =12;

let arr = []
// let arr=[1,2,3,4,5,6,7,8,9,10];
let k=1;
for(let i =0;i<n;i++){
    arr[i]=k;
    k++;
}

for(let val of arr){
    console.log(val)
}

const sum = arr.reduce((ini,sec)=>{
    return ini+sec;
})

console.log(sum);


const mul = arr.reduce((ini,sec)=>{
    return ini*sec;
})

console.log(mul);