// Loops

// for-of loop

// for-of loop is used for strings and arrays

// for(let val of strVar){
    // do some work
// }

for (let i of "hello"){
    console.log(i);
}

let bring = "tonystark"

let size = 0;

for (let i of bring){ 
    console.log("i = ",i);
    size++;
}

console.log('string size = ', size);