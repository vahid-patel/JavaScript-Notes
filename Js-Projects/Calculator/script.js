let display = document.querySelector('.input')
let buttons = document.querySelectorAll('.btn')

let displayvalue =''
let count =0;

buttons.forEach((button)=>{

    button.addEventListener('click',(e)=>{
        const buttontext = e.target.textContent

        handleinput(buttontext)
    })
})

function handleinput(value)
{
    if(value === '='){
        count++;
        try{
            
            displayvalue = eval(displayvalue)
            display.textContent=displayvalue
        }
        catch{
            display.textContent = "Error"
        }
    }

    else if (value==='AC'){
        displayvalue= ''
        display.textContent= displayvalue
    }

    else if (value==='C'){
        if(count>0)
        {
            displayvalue= ''
            display.textContent = displayvalue
            count=0;
        }
        else{
            displayvalue = displayvalue.slice(0,-1)
            display.textContent=displayvalue            
        }
    }
    else {
        displayvalue += value;
        display.textContent = displayvalue
    }
}