//for a given array with marks of students [85,97,44,37,76,60] Find the average marks of the entire class.

let marks = [85,97,44,37,76,60];

let marksum=0;

for (let i = 0 ; i<marks.length;i++)
{
    marksum+=marks[i];
}

console.log('average marks of the entire class is : ',marksum/marks.length);

let sum=0;


for(let val of marks)
{
    sum+=val;

}

console.log('average marks of the entire class is : ',sum/marks.length);
