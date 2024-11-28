// For a given array with prices of 5 items [250,645,300,900,50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// I have tWo ways to solve

let items = [250,645,300,900,50];
let i =0;
// for(let val of items)
// {
//     let percent = val*(0.1);
//     items[i] = val-percent;
//     // val = val-percent;
//     // console.log(val);
//     i++;
// }


// for(let val of items){
//     console.log(val);
    
// }

for(let j = 0; j<items.length;j++)
{
    let percent = items[j]*(0.1);
    items[j] -= percent;
    
    console.log(items[j]);

}