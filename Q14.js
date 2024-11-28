// Create a new button element. Give it a text "click me", background color of red and text color of white
// Insert the button as the first element inside the body tag

let newBtn = document.createElement("button")
newBtn.innerText="Click me "
newBtn.style.backgroundColor="red"
newBtn.style.color="white"

let body = document.querySelector("body")

body.prepend(newBtn)

// Create a <p> tag in html, give it a class and some styling.
// Now create a new class in CSS and try to append this class to the <p> element

// Did you notice, how you overwrite the class name when you add a new one?
// solve this using classList

let para = document.querySelector("p")

// para.setAttribute("class","newclass")

para.classList.add("newclass")