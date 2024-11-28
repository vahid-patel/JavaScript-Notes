// Insert Elements 
// let el = document.createElement("div")


// Node.append(el) // adds at the end of node (inside)
// Node.prepend(el)// adds at he start of node (inside)
// Node.before(el)// adds before the node (outside)
// Node.after(el)// adds after the node (outside)

// Delete Element

// Node.remove() // removes the node

let newBtn = document.createElement("button")
newBtn.innerText="click here!"
console.log(newBtn)

let div = document.querySelector("div")
// div.append(newBtn) // button added at inside of div (at the end of div) 
// div.prepend(newBtn)// button added at inside of div (at the start of div)
// div.before(newBtn) // button added at outside of div (before the div)
// div.after(newBtn)  // button added at outside of div (after the div)

let p = document.querySelector("p")
p.after(newBtn)

let newheading = document.createElement("h1")
newheading.innerHTML="<i>DOM Manipulation</i>"

// let body = document.querySelector("body")
// body.prepend(newheading)

let body = document.querySelector("body").prepend(newheading)

p.remove()

// newheading.remove()

