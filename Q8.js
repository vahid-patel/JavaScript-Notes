/*
Create an array to store companies --> "Bloomberg","Microsoft","Uber", "Google", "IBM", "Netflix"

a. Remove the first compnay from the array 

b. Remove Uber and Add Ola in its place

c. Add Amanzon at the end
*/

let companies=["Bloomberg","Microsoft","Uber", "Google", "IBM", "Netflix"];

companies.shift();//a

console.log(companies);

companies.splice(1,1,"Ola");//b

console.log(companies);

companies.push("Amazon");//c

console.log(companies);