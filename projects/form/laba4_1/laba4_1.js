let submitBtn = document.querySelector('.btn')
let firstName = document.querySelector('#firstName')
let secondName = document.querySelector('#secondName')
let result = document.querySelector('.result')

submitBtn.addEventListener('click', () => {
    if (!firstName.value && !secondName.value) {
        firstName.style.borderColor = 'red';
        secondName.style.borderColor = 'red';
        result.textContent = '';
         alert("Введите данные!");
    }
    else if (firstName.value === '') {
        firstName.style.borderColor = 'red';
        secondName.style.borderColor = 'green';
        result.textContent = '';
        alert('Введите имя!')
    } else if (secondName.value === '') {
        secondName.style.borderColor = 'red';
        firstName.style.borderColor = 'green';
        result.textContent = '';
        alert('Введите фамилию!')
    } else {
        secondName.style.borderColor = 'green';
        firstName.style.borderColor = 'green';
        result.textContent = `Здравствуйте, ${firstName.value} ${secondName.value}!`
    }

})