// Arrays

let marks = [87, 98, 67, 78, 88, 76, 78, 90, 89];
console.log(marks);

for (let val of marks) {
  console.log(val);
}

let names = ["rohan", "umar", "amar", "rahul", "yash"];

for (let val of names) {
  console.log(val);
}

let cgpa = [8.9, 7.8, 8.7, 6.8, 8.4, 6.3];

for (let val of cgpa) {
  console.log(val);
}

console.log(marks.length);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(cgpa[0]);
console.log(cgpa[1]);
console.log(cgpa[2]);

for(let i = 0;i<marks.length;i++)
{
    console.log(marks[i]);
}


for(let i = 0;i<names.length;i++)
{
    console.log(names[i]);
}


for(let i = 0;i<cgpa.length;i++)
{
    console.log(cgpa[i]);
}

marks[0]=34;  // it is possible to change array elements
console.log(marks);

let string = 'shubham';
string[0]='b';    // in strings we cannot change elements
console.log(string);