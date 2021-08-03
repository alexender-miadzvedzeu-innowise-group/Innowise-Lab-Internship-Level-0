let buttons = document.querySelectorAll('.buttons_wrapper__button');
let scoreboardValue = document.querySelector(
	'.calc_wrapper__scoreboard .value',
);

for (let button of buttons) {
	button.addEventListener('click', () => makeEvent(button));
}

const makeEvent = (button) => {
	let buttonValue = button.textContent;
	insert(buttonValue);
};

const insert = (value) => {
	if (scoreboardValue.textContent == 0) {
		scoreboardValue.textContent = value;
	} else if (value == '*' || value == '-' || value == '+') {
		scoreboardValue.textContent += value;
	} else if (value == '÷') {
		scoreboardValue.textContent += '/';
	} else if (
		value === '0' ||
		value === '1' ||
		value === '2' ||
		value === '3' ||
		value === '4' ||
		value === '5' ||
		value === '6' ||
		value === '7' ||
		value === '8' ||
		value === '9'
	) {
		scoreboardValue.textContent += value;
		scoreboardValue.textContent = eval(scoreboardValue.textContent);
	}
};
