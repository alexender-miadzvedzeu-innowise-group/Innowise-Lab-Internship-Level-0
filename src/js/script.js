import {
	sqNt,
	calculateExpression,
	expInDegree,
	tenInX,
	log10,
	findLastNumber,
	isNumber,
	ln,
	backspace,
	findZeroAfterSlash
} from './modules.js';

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
	if (findZeroAfterSlash({valuesFromButtons})) {
		scoreboardValue.textContent = 'На ноль делить нельзя';
	} else {
		scoreboardValue.textContent = valuesFromButtons.join('');
	};
};

const makeExpression = key => {
	isNumber(key) ? valuesFromButtons.push(key) : addSignToExpression(key);
};

const addSignToExpression = key => {

	const checkPrewKeyInExpressionNum = () => {

		const prewKey = valuesFromButtons[valuesFromButtons.length - 1];
		
		if (!isNumber(prewKey)) {
			valuesFromButtons[valuesFromButtons.length - 1] = key;
		} else {
			valuesFromButtons.push(key);
		}
	};

	const checkPrewKeyInExpressionSym = () => {

		const prewKey = valuesFromButtons[valuesFromButtons.length - 1];
		
		if (isNumber(prewKey)) {
			valuesFromButtons[valuesFromButtons.length - 1] = key;
		} else {
			valuesFromButtons.push(key);
		}
	};

	switch (key) {
	case '/':
		checkPrewKeyInExpressionNum(key);
		break;

	case '*':
		checkPrewKeyInExpressionNum(key);
		break;

	case '-':
		checkPrewKeyInExpressionNum(key);
		break;

	case '+':
		checkPrewKeyInExpressionNum(key);
		break;

	case '(':
		checkPrewKeyInExpressionSym(key);
		break;

	case ')':
		checkPrewKeyInExpressionNum(key);
		break;

	case '=':
	case 'equal':
	case 'Enter':
		if (valuesFromButtons.length !== 0 && !findZeroAfterSlash({valuesFromButtons})) {
			currentValue = calculateExpression(valuesFromButtons, scoreboardValue);
			valuesFromButtons = [];
			valuesFromButtons.push(currentValue);
			valuesFromButtons = valuesFromButtons.join('').split('');
			currentValue = '';
		} else {
			showExpressionInScoreboard();
		};
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
			findLastNumber(valuesFromButtons);
			sqNt({ currentValue, valuesFromButtons, n: 0.5 });
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			findLastNumber(valuesFromButtons);
			sqNt({ currentValue, valuesFromButtons, n: 0.5 });
		}
		break;

	case '3x': //functions from module
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			findLastNumber(valuesFromButtons);
			sqNt({ currentValue, valuesFromButtons, n: 1 / 3 });
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			findLastNumber(valuesFromButtons);
			sqNt({ currentValue, valuesFromButtons, n: 1 / 3 });
		}
		break;

	case 'nx': //functions from module
		for (const button of buttons) {
			button.removeEventListener('click', listinerForButton);
		}

		window.removeEventListener('keydown', listinerForKeyButton);

		function _listinerForButton() {
			const key = this.getAttribute('data-key');
			if (isNumber(key)) {
				sqNt({ currentValue, valuesFromButtons, n: 1 / key });

				showExpressionInScoreboard();

				for (const button of buttons) {
					button.removeEventListener('click', _listinerForButton);
					button.addEventListener('click', listinerForButton);
				}
			}
		}

		function _listinerForKeyButton(e) {
			if (isNumber(e.key)) {
				sqNt({
					currentValue,
					valuesFromButtons,
					n: 1 / e.key,
				});

				showExpressionInScoreboard();
				window.removeEventListener('keydown', _listinerForKeyButton);
				window.addEventListener('keydown', listinerForKeyButton);
			}
		}
		window.addEventListener('keydown', _listinerForKeyButton);

		for (const button of buttons) {
			button.addEventListener('click', _listinerForButton);
		}

		break;

	case 'ln':
		findLastNumber(valuesFromButtons);
		ln({valuesFromButtons});
		break;

	case 'log10':
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			findLastNumber(valuesFromButtons);
			log10({valuesFromButtons});
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			findLastNumber(valuesFromButtons);
			log10({valuesFromButtons});
		}
		break;

	case 'x2': //functions from module
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			findLastNumber(valuesFromButtons);
			sqNt({ currentValue, valuesFromButtons, n: 2 });
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			findLastNumber(valuesFromButtons);
			sqNt({ currentValue, valuesFromButtons, n: 2 });
		}
		break;

	case 'x3': //functions from module
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			findLastNumber(valuesFromButtons);
			sqNt({ currentValue, valuesFromButtons, n: 3 });
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			findLastNumber(valuesFromButtons);
			sqNt({ currentValue, valuesFromButtons, n: 3 });
		}
		break;

	case 'xy':
		for (const button of buttons) {
			button.removeEventListener('click', listinerForButton);
		}

		window.removeEventListener('keydown', listinerForKeyButton);

		function _listinerForButton2() {
			const key = this.getAttribute('data-key');
			if (isNumber(key)) {
				sqNt({ currentValue, valuesFromButtons, n: key });

				showExpressionInScoreboard();

				for (const button of buttons) {
					button.removeEventListener('click', _listinerForButton2);
					button.addEventListener('click', listinerForButton);
				}
			}
		}

		function _listinerForKeyButton2(e) {
			if (isNumber(e.key)) {
				sqNt({
					currentValue,
					valuesFromButtons,
					n: e.key,
				});

				showExpressionInScoreboard();
				window.removeEventListener('keydown', _listinerForKeyButton2);
				window.addEventListener('keydown', listinerForKeyButton);
			}
		}
		window.addEventListener('keydown', _listinerForKeyButton2);

		for (const button of buttons) {
			button.addEventListener('click', _listinerForButton2);
		}

		break;

	case 'ex': //functions from module
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			findLastNumber(valuesFromButtons);
			expInDegree({ valuesFromButtons });
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			findLastNumber(valuesFromButtons);
			expInDegree({ valuesFromButtons });
		}
		break;

	case '10x': //functions from module
		if (isNumber(valuesFromButtons[valuesFromButtons.length - 1])) {
			findLastNumber(valuesFromButtons);
			tenInX({ valuesFromButtons });
		} else {
			valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
			findLastNumber(valuesFromButtons);
			tenInX({ valuesFromButtons });
		}
		break;

	case 'Backspace':
		backspace({valuesFromButtons});
		break;

	default:
		break;
	}
	console.log(key);
};