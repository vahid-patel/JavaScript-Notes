//DOM Manipulation 

//selecting with id
// document.getElementById('myID')

//selecting with class
// document.getElementsByClassName('myClass')

//selecting with tag
// document.getElementsByTagName('h5')


// let heading = document.getElementById('heading1')
// console.dir(heading)

// let head = document.getElementsByClassName('heading2')
// console.dir(head)


// Query Selector

// document.querySelector("myid/myclass/tag")
//returns first element

// document.querySelectorAll('myid/myclass/tag')
//returns a Nodelist


// Properties

/*
> tagName : returns tag for element nodes
> innerText : returns the text content of the element and all its children
> innerHTML : returns the plain text or HTML contents in the element 
> textContent : returns textual content even for hidden elements

*/

// console.log(heading.tagName)


let div=document.querySelector("div")
console.dir(div);

let bold = document.querySelector("h2")