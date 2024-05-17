// displaying values for calculations 

let buttons = document.querySelectorAll('[value]')
let display = document.querySelector('#answer')
for (let button of buttons) {
    button.addEventListener('click', function(){
        if (button.value == "=") {
            equal(display.value)
        } else if(button.value == "AC"){
            display.value = ''
        }  else {
            display.value += button.value
            
        }
    })
}

function equal(value) {
    display.value=eval(value)
}


