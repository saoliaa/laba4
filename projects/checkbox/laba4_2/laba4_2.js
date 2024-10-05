let radioButtons = document.querySelectorAll('[name="food"]'); //получаем список всех checkbox элементов

let btnElement = document.querySelector('.btn');
let result = document.querySelector('.result');

btnElement.addEventListener('click', function(){
    let total = 0; 
    radioButtons.forEach(radioButton => {
        if (radioButton.checked){
            total = total + parseInt(radioButton.value)     
        }
    });   
    result.textContent = `${total} руб.`;
})
