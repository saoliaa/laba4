let buttonPlaceAnOrder = document.querySelector(".place__an__order");
let inputFirstName = document.querySelector("input[name='first__name']");
let inputSecondName = document.querySelector("input[name='second__name']");
let checkboxCoffee = document.querySelectorAll("input[name='coffee']");
let inputCountCoffee = document.querySelectorAll(".count");
let spanAmount = document.querySelector(".amountResult");

let user = {
	firstName: "",
	secondName: "",
	amount: 0
};

inputFirstName.addEventListener("change", function() {
	user.firstName = inputFirstName.value;
});

inputSecondName.addEventListener("change", function() {
	user.secondName = inputSecondName.value;
});

function calculateAmount() {
	let total = 0;
	for (let k = 0; k < checkboxCoffee.length; k++) {
		if (checkboxCoffee[k].checked) {
			total += parseInt(checkboxCoffee[k].dataset.price) * parseInt(inputCountCoffee[k].value);
		}
	}
	return total;
}

/* Проверка введенных значений **/
function validateInput(input) {
	if (/^0[0-9]/.test(input.value)) {
		input.value = parseInt(input.value, 10);
	}
	if (parseInt(input.value) < 0 || input.value === "") {
		alert("Недопустимое значение. Количество не может быть отрицательным.");
		input.value = 0;
	}
}
for (let k = 0; k < inputCountCoffee.length; k++) {
	inputCountCoffee[k].addEventListener("change", function() {
		validateInput(inputCountCoffee[k]);
		user.amount = calculateAmount();
		spanAmount.textContent = user.amount;
	});
}
/** при выборе checkbox'a в input ставится 1 **/
for (let k = 0; k < checkboxCoffee.length; k++) {
	checkboxCoffee[k].addEventListener("change", function() {
		if (checkboxCoffee[k].checked) {
			inputCountCoffee[k].value = 1;
		} else {
			inputCountCoffee[k].value = 0;
		}
		user.amount = calculateAmount();
		spanAmount.textContent = user.amount;
	});
}



buttonPlaceAnOrder.addEventListener("click", function() {
	user.amount = document.querySelector(".amountResult").textContent;
	alert(`Заказчик: ${user.firstName} ${user.secondName}\nИтого: ${user.amount} рублей`);
});
