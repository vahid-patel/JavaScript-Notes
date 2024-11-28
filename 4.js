// for-in loop

// for-in loop is used for objects

/*
for(let key in objVar){
    // do some work
}
 */

const student={
    name:'Salmon bhoi',
    age:52,
    cgpa:6.9,
    isPass:true
}

for(let key in student){
    console.log('key = ',key, '  value = ', student[key]);
}