// Array Methods

/*
Push(): add to end

Pop(): delete from end and return

toString(): converts array to string
*/

let fruits = ['apple','banana','Grapes','mango'];

fruits.push('watermelon');

fruits.push('orange','chiku','papaya');

console.log(fruits);

fruits.pop();

console.log(fruits);

console.log(fruits.toString()); // converts array to string


//Concat

let marvel =['ironman','thor','hulk'];
let DC = ['superman','batman','aquaman'];

let heroes = marvel.concat(DC);

console.log(heroes);


// Shift and Unshift in array 

//unshift(): add to start  // Opposite of push()

//shift(): delete from start and return   // Opposite of pop()

let vegetables = ['spinach','onion-leaves','capsicum','potato'];

vegetables.unshift('ladyfinger');

vegetables.unshift('brinjal','cabbage','cauliflower');

console.log(vegetables);

vegetables.shift();

console.log(vegetables);


// Slice in array
// slice(): returns a piece of the array

console.log(vegetables.slice(1,3)); // does not make change in original array

// splice():change original Array(add, remove, replace)
//splice(startIndx, delCount, newElement);
// splice can also used to delete/replace/add element of array at specific place/position/index

let num =[1,2,3,4,5,6,7,8,9];
// num.splice(2,3,87,34,23)    // it can make changes in array

num.splice(2,0,45,34);
// num.splice(2) 
console.log(num); 