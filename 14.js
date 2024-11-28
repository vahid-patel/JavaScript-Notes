// Attributes

// getAttribute(attr) // to get the attribute value

// setAttribute(attr,value)//to set the attribute val th

// Style 

// Node.style

let div = document.querySelector("div")
console.log(div)

let clas = div.getAttribute("class")
console.log(clas)

let name = div.getAttribute("name")
console.log(name)

let para = document.querySelector(".pyara")
console.log(para.getAttribute('class'))

para.setAttribute('class','hello')

div.style.backgroundColor = "red"
div.style.color="white"
div.style.fontSize = "34px"