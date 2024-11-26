/*
Data Types is JavaScript

Number 
String 
Boolean
Undefined
Null
BigInt
Symbol

Object is also an DataType 
Object is like 'Structure' Datatype in C language which can store different types of datatypes variables and their values in it
Object ---> collection of values

variable_type   object_name = {

key : value,
key : value
}

usually const variable type is used to declare object 
*/

const student = {
  Name: "Salmon Bhoi",
  age: 23,
  cgpa: 9.3,
  isPass: true,
};

// Two ways to access key values of object
// obj.key
//obj.["key"]

console.log(student.age);
// console.log(student["age"]);

student.age = student.age + 1;
// student["age"] = student["age"] + 1;

console.log(student.age);

console.log("hello"+445); // concatenation in js


student.Name = " Bajrangi Bhaijaan";

console.log(student.Name);


