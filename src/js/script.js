const buttons = document.querySelectorAll('.buttons_wrapper__button');
const scoreboardValue = document.querySelector('.value');

for (const button of buttons) {
	button.addEventListener('click', () => {
		const key = button.getAttribute('data-key');
		calc(key);
	});
};

window.addEventListener('keydown', e => {
	calc(e.key);
});

const isNumber = key => {
	const numbers = [
		'1', '2', '3',
		'4', '5', '6',
		'7', '8', '9',
		'0'
	];
	return numbers.includes(String(key));
};

let currentValue = '';
let valuesFromButtons = [];


const calc = key => {
	valuesFromButtons.length === 0 && isNumber(key) ? valuesFromButtons.push(key) : makeExpression(key);
	showExpressionInScoreboard();
};

const showExpressionInScoreboard = () => {
	scoreboardValue.textContent = valuesFromButtons.join('');
};

const makeExpression = key => {
	isNumber(key) ? valuesFromButtons.push(key) : addSignToExpression(key);
	
};

const addSignToExpression = key => {

	const checkPrewKeyInExpression = () => {

		const prewKey = valuesFromButtons[valuesFromButtons.length - 1];
		
		if (!isNumber(prewKey)) {
			valuesFromButtons[valuesFromButtons.length - 1] = key;
		} else {
			valuesFromButtons.push(key);
		}
	};

	switch (key) {
		
	case '/':
		checkPrewKeyInExpression(key);
		break;
	
	case '*':
		checkPrewKeyInExpression(key);
		break;

	case '-':
		checkPrewKeyInExpression(key);
		break;

	case '+':
		checkPrewKeyInExpression(key);
		break;

	case 'equal':
		valuesFromButtons.length !== 0 ? calculateExpression(valuesFromButtons) : null;
		break;

	case 'Enter':
		valuesFromButtons.length !== 0 ? calculateExpression(valuesFromButtons) : null;
		break;

	case 'AC':
		currentValue = '';
		valuesFromButtons = [];
		showExpressionInScoreboard();
		break;

	case 'Delete':
		currentValue = '';
		valuesFromButtons = [];
		showExpressionInScoreboard();
		break;

	default:
		break;
	}
};

const calculateExpression = arr => {
	if (isNumber(arr[arr.length - 1])) {
		currentValue = eval(arr.join(''));
		valuesFromButtons = [];
		valuesFromButtons.push(currentValue);
		valuesFromButtons = valuesFromButtons.join('').split('');
		currentValue = '';
	} else if (!isNumber(arr[arr.length - 1])) {
		arr.splice(arr.length - 1, 1);
	}
};