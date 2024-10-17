/*
var : Variable can be re-declared and updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.
*/ 

var ex = 45;

var ex = 34; // var can be redeclared 

ex = 98; // Updation is possible 

console.log(ex); // No error

let lex=78;

let th; // No need to initialise at the time of declaration like const variable

// let lex =34; // Redeclaration not possible here bcoz it is block scoped variable

lex = 58; // No error, updation is possible here

console.log(lex);

const j=23; //  const variable must be initialised at the time of variable declaration

// j =88; // updation not possible bcoz it it const

// console.log(j)// error

const k =67;

console.log(k);

{
    var kbc =78;
    let yyc =65;
    const bbc =43;

    console.log(kbc)
    console.log(yyc)
    console.log(bbc)
}


{
    console.log(kbc); // kbc variable var is global scope variable that is why we can access it anywhere 
    console.log(yyc);// Error bcoz it is block scoped variable 
    console.log(bbc);// Error bcoz it is block scoped variable 
}