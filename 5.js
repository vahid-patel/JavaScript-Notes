let str = "Tony stark";
let str2 = '   itachi    uchiha    ';

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str2.trim()); // Removes whitespaces
console.log(str.slice(1,7));// returns part of string
console.log(str.concat(str2));// joins str and str2
console.log(str+str2);
console.log('we are ',str+str2);

console.log(str.replace('Tony','steve'));

console.log(str.charAt(5));



console.log(str[0]);
console.log(str[1]);
console.log(str[2]); 

// Template Literals 
let specialString = `This is template literal string`; // this is special type of string
console.log(specialString);

// Use of template literal 
let obj ={
    item:'pen',
    price:10
};

let output = `the cost of ${obj.item} is ${obj.price} rupees `;// This is String Interpolation
console.log(output);

console.log('the cost of ',obj.item,' is ',obj.price,' rupees ');

console.log('this is \niron\tman');//Escape character '\n' for Next Line, \t for tab

let srt='this is \niron\tman';
console.log(srt.length);

// we cannot change any string : example ---
let string ='IloveJS';
str[0]= 'U';
console.log(string);

// if we want to change string then we can use replace
string = string.replace("I","U");
console.log(string);
