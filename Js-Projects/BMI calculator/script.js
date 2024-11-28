let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let button = document.querySelector('#calculate')



button.addEventListener('click',()=>{
    let Hval = height.value;
    let Wval = weight.value;

    if(Hval && Wval)
        {
            let meterHeight = Hval/100;
            let bmi = Wval/(meterHeight*meterHeight)
        
            document.querySelector('#result').textContent = 'BMI : '+ bmi.toFixed(2)
        }
    else{
        document.querySelector('#result').textContent = "Invalid Input"
    }
})

