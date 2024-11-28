// Events in Js 

// The change in the state of an object is known as an Event.
// Events are fired to notify code of "interesting changes" that may affect code execution.

//Mouse events (click, double click etc.)
//Keyboard events (keypress, keyup, keydown)
//Form events (submit etc.)
//Print event and many more

// Event Handling in Js

// Node.event = () => {
//     //handle here
// }

let btn = document.querySelector(".btn")

btn.onclick = () => {
    // alert("don't click")
    let a = 0
    a++
    console.log(a)
}

// Event Object 

// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.

/*
node.event = (e) => {
    //handle here
}

e.target, e.type, e.clientX, e.clientY
*/

let button = document.querySelector(".btn2")

button.onclick = (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX,e.clientY)
}

//Event Listeners 

//node.addEventListener(event,callback)

//node.removeEventListener(event,callback)

//Note : The callback reference should be same to remove

let btnevt=document.querySelector('.btn3')


// if we want to remove handler 4 then we have to store callback function in variable

let handler4 =()=>{
    console.log("this button was clickked handler 4")
}



btnevt.addEventListener('click',()=>{
    console.log("this button was clickked")
})

btnevt.addEventListener('click',()=>{
    console.log("this button was clickked handler 2")
})

btnevt.addEventListener('click',()=>{
    console.log("this button was clickked - handler 3")
})

btnevt.addEventListener('click',handler4)

btnevt.removeEventListener('click',handler4)