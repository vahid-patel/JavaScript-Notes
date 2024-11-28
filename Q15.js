//Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again

let button= document.querySelector("button")
let currentheme ='light'

button.addEventListener("click",()=>{
    if(currentheme==='light'){
        currentheme = 'dark'
        // document.querySelector('body').style.backgroundColor="black"
        document.querySelector('body').classList.add('dark')
        document.querySelector('body').classList.remove('light')
        console.log('hello')
    }
    else{
        currentheme='light'
        // document.querySelector('body').style.backgroundColor="white"
        document.querySelector('body').classList.add('light')
        document.querySelector('body').classList.remove('dark')
        console.log('bye')



    }
})