import Calc from './fun.js';
import '../css/style.css';

const buttons = document.querySelectorAll('.buttons_wrapper__button');
const scoreboardHistory = document.querySelector('.history');
const scoreboardValue = document.querySelector('.value');

const calc = new Calc();

const showCurrentValue = () => {
	if (calc.valFromButtons.length > 1) {
		let historyArr = [...calc.valFromButtons];
		let history = historyArr.splice(0, historyArr.length - 1).join('');
		scoreboardHistory.textContent = history;
		scoreboardValue.textContent = calc.currentResult;
	} else {
		scoreboardHistory.textContent = '';
		scoreboardValue.textContent = calc.currentResult;
	}
};

for (const button of buttons) {
	button.onclick = (e) => {
		const key = e.target.getAttribute('data-key');
		switch (key) {
		case '.':
		case '/':
		case '*':
		case '-':
		case '+':
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '0':
			calc.makeExpr(key);
			break;
		case '=':
			calc.resultExpression();
			break;
		default:
			break;
		}
		showCurrentValue();
	};
}

window.calc = calc;


