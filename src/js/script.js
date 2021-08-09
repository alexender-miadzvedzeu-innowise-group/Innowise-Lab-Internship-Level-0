import {sqNt, calculateExpression} from './modules.js';
import '../css/style.css';


const buttons = document.querySelectorAll('.buttons_wrapper__button');
const scoreboardValue = document.querySelector('.value');

function listinerForButton () {
	const key = this.getAttribute('data-key');
	isNumber(key) || valuesFromButtons.length !== 0 ? calc(key) : null;
}

function listinerForKeyButton (e) {
	isNumber(e.key) || valuesFromButtons.length !== 0 ? calc(e.key) : null;
}

for (const button of buttons) {
	button.addEventListener('click', listinerForButton);
};

window.addEventListener('keydown', listinerForKeyButton);

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


// *****************************
window.currentValue = currentValue;
window.valuesFromButtons = valuesFromButtons;
// *****************************

const calc = key => {
	valuesFromButtons.length === 0 && isNumber(key) ? valuesFromButtons.push(key) : makeExpression(key);
	showExpressionInScoreboard();
};

const showExpressionInScoreboard = () => {
	scoreboardValue.textContent = valuesFromButtons.join('');
};

export const makeExpression = key => {
	isNumber(key) ? valuesFromButtons.push(key) : addSignToExpression(key);
	
};

export const addSignToExpression = key => {

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

	case '=':
	case 'equal':
	case 'Enter':
		if (valuesFromButtons.length !== 0) {
			currentValue = calculateExpression(valuesFromButtons);
			valuesFromButtons = [];
			valuesFromButtons.push(currentValue);
			valuesFromButtons = valuesFromButtons.join('').split('');
			currentValue = '';
		}
		break;

	case 'AC':
		currentValue = '';
		valuesFromButtons = [];
		scoreboardValue.textContent = 0;
		break;

	case 'Delete':
		currentValue = '';
		valuesFromButtons = [];
		scoreboardValue.textContent = 0;
		break;

	case '2x': //functions from module
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			sqNt({currentValue, valuesFromButtons, isNumber, n:0.5});
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			sqNt({currentValue, valuesFromButtons, isNumber, n:0.5});
		}
		break;

	case '3x': //functions from module
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			sqNt({currentValue, valuesFromButtons, isNumber, n:1/3});
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			sqNt({currentValue, valuesFromButtons, isNumber, n:1/3});
		}
		break;
	
	case 'nx': //functions from module
		
		for (const button of buttons) {
			button.removeEventListener('click', listinerForButton);
		};

		window.removeEventListener('keydown', listinerForKeyButton);

		function _listinerForButton () {
			const key = this.getAttribute('data-key');
			if (isNumber(key)) {
				sqNt({currentValue, valuesFromButtons, isNumber, n:key});

				showExpressionInScoreboard();
				
				for (const button of buttons) {
					button.removeEventListener('click', _listinerForButton);
					button.addEventListener('click', listinerForButton);
				};
			}
		}

		function _listinerForKeyButton (e) {
			if (isNumber(e.key)) {
				sqNt({
					currentValue,
					valuesFromButtons,
					isNumber,
					n:e.key
				});

				showExpressionInScoreboard();
				window.removeEventListener('keydown', _listinerForKeyButton);
				window.addEventListener('keydown', listinerForKeyButton);
			}
		}
		window.addEventListener('keydown', _listinerForKeyButton);


		for (const button of buttons) {
			button.addEventListener('click', _listinerForButton);
		};

		break;


	case 'x2': //functions from module
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			sqNt({currentValue, valuesFromButtons, isNumber, n:2});
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			sqNt({currentValue, valuesFromButtons, isNumber, n:2});
		}
		break;

	case 'x3': //functions from module
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			sqNt({currentValue, valuesFromButtons, isNumber, n:3});
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			sqNt({currentValue, valuesFromButtons, isNumber, n:3});
		}
		break;

	default:
		break;
	}
};