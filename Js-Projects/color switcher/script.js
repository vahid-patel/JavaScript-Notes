let buttons = document.querySelectorAll('button')

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let color = button.getAttribute('id')
        document.body.style.backgroundColor = color
    })
})