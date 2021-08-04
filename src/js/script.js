const buttons = document.querySelectorAll('.buttons_wrapper__button');
const scoreboardValue = document.querySelector('.value');

for (const button of buttons) {
	button.addEventListener('click', () => {
		makeExpression(button.getAttribute('data-key'));
		button.getAttribute('data-key') === 'equal' ? count() : null;
	});
}

window.addEventListener('keydown', (e) => {
	makeExpression(e.key);
	e.key === '=' || e.key === 'Enter' ? count() : null;
});

let expression = '';
let keysValues = [];
let nxFlag = false;

const makeExpression = (value) => {
	if (
		value !== 'Shift' &&
		value !== 'equal' &&
		value !== 'Enter' &&
		value !== 'Delete' &&
		value !== 'AC'
	) {
		keysValues.push(value);
	}

	const expArr = [
		'1', '2', '3', '4', '5',
		'6', '7', '8', '9', '0',
		'/', '*', '-', '+', '.',
		'(', ')'
	];

	//% buttons funtional
	if (value) {
		if (keysValues[keysValues.length - 1] === '%') {
			keysValues = findLastNumber(keysValues);
			keysValues[keysValues.length - 1] *= 0.01;
			expression = keysValues.join('');
			scoreboardValue.textContent = expression;
		}
	}

	//AC and Delete buttons funtional
	if (value === 'AC' || value === 'Delete') {
		expression = '';
		scoreboardValue.textContent = 0;
	}

	//AC and Delete buttons funtional
	if (expArr.includes(value) && expression[0] !== '0' && scoreboardValue.textContent !== 0) {
		expression += value;
		scoreboardValue.textContent = expression;
	}

	//1/x
	if (keysValues[keysValues.length - 1] === '1x') {
		keysValues = findLastNumber(keysValues);
		keysValues[keysValues.length - 1] = 1 / keysValues[keysValues.length - 1];
		expression = keysValues.join('');
		scoreboardValue.textContent = expression;
	}

	// sqrt(x)
	if (keysValues[keysValues.length - 1] === '2x') {
		keysValues = findLastNumber(keysValues);
		keysValues[keysValues.length - 1] = Math.sqrt(keysValues[keysValues.length - 1]);
		expression = keysValues.join('');
		scoreboardValue.textContent = expression;
	}

	//cbrt(x)
	if (keysValues[keysValues.length - 1] === '3x') {
		keysValues = findLastNumber(keysValues);
		keysValues[keysValues.length - 1] = Math.cbrt(keysValues[keysValues.length - 1]);
		expression = keysValues.join('');
		scoreboardValue.textContent = expression;
	}

	//nx
	if (keysValues[keysValues.length - 2] === 'nx') {
		let result = Math.pow(keysValues[keysValues.length - 3], 1/keysValues[keysValues.length - 1]);
		keysValues.splice(keysValues.length - 3, keysValues.length - 1);
		keysValues.push(result);
		expression = keysValues.join('');
		scoreboardValue.textContent = expression;
	}

	//log10
	if (keysValues[keysValues.length - 1] === 'log10') {
		keysValues[keysValues.length - 1] = Math.LN10;
		expression = keysValues.join('');
		scoreboardValue.textContent = expression;	
	}

	//x2
	if (keysValues[keysValues.length - 1] === 'x2' && keysValues.length !==1 ) {
		keysValues[keysValues.length - 2] = Math.pow(keysValues[keysValues.length - 2], 2);
		keysValues.splice(keysValues.length - 1, 1);
		expression = keysValues.join('');
		scoreboardValue.textContent = expression;	
	} else if (keysValues[0] === 'x2') {
		keysValues = [];
		expression = keysValues.join('');
		scoreboardValue.textContent = 'Не хватает аргумента';
	}

	//x3
	if (keysValues[keysValues.length - 1] === 'x3' && keysValues.length !==1 ) {
		keysValues[keysValues.length - 2] = Math.pow(keysValues[keysValues.length - 2], 3);
		keysValues.splice(keysValues.length - 1, 1);
		expression = keysValues.join('');
		scoreboardValue.textContent = expression;	
	} else if (keysValues[0] === 'x3') {
		keysValues = [];
		expression = keysValues.join('');
		scoreboardValue.textContent = 'Не хватает аргумента';
	}

	// console.log(value);
	console.log(keysValues);
	// console.log(expression);
};

//Enter and = buttons count funtional
const count = () => {
	expression.length !== 0 ? (expression = eval(expression)) : null;
	scoreboardValue.textContent = expression;
	expression === 0 ? (expression = '') : null;
};

//find last Number in arr
const findLastNumber = (arr) => {
	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	let number = '';
	let index = 0;
	for (let i = arr.length - 2; i >= 0; i--) {
		if (numbers.includes(arr[i])) {
			number += arr[i];
			index = i;
		} else break;
		number = number.split('').reverse().join('');
	}
	arr.splice(index);
	arr.push(number);
	return arr;
};