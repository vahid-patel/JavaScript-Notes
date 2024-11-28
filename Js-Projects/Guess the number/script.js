const randomNumber = parseInt(Math.random() * 100 + 1)

let submit = document.querySelector('.submit')
let guessinput = document.querySelector('.guesser')
let prevguess = document.querySelector('.preguesses')
let remguess = document.querySelector('.guessrem')

submit.addEventListener('click',()=>{
    if(guessinput.value == randomNumber)
    {
        document.querySelector('.result').textContent = 'Correct, '+ guessinput.value + ' is the right number'
        alert('Correct, '+ guessinput.value + ' is the right number')
        location.reload()
    }
    else{
        document.querySelector('.result').textContent = 'Wrong, Try Again '

    }
    prevguess.textContent = prevguess.textContent + guessinput.value + ', '

    remguess.innerText--

    if(remguess.innerText == 0)
    {
        alert('All attempts used. Game Over. Right Number Was '+ randomNumber);
        location.reload()
    }
})