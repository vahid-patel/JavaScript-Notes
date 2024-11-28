// Q1. Create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string.

// Q2. Create an arrow function to perform the saame task..


function vowelcounter(string){ 
    let count=0;
    for(let i = 0;i<string.length;i++) // this can also possible using for of loop
    {
        if(string[i]==='a'|| string[i]==='e' || string[i]==='i' || string[i]==='o' || string[i]==='u')
        {
            count+=1;
        }
    }
    return count;
}

// console.log(vowelcounter("madara uchiha"));

const vowelscount = (string) => {
    let count=0;
    for(let i = 0;i<string.length;i++)
    {
        if(string[i]==='a'|| string[i]==='e' || string[i]==='i' || string[i]==='o' || string[i]==='u')
        {
            count+=1;
        }
    }
    return count;
}

console.log(vowelscount("madara uchiha"));
