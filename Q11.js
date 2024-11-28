// Q1 We are given array of marks of students. Filter out of the marks of students that scored 90+

let marks = [50,70,88,91,69,99,86,92,75,84,93];

let ninetyperc= marks.filter((val)=>{
    return val>90;
})

console.log(ninetyperc)