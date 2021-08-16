import SimpleFun from './simpleFun.js';
import DiffFun from './diffFun.js';
import '../css/style.css';

const buttons = document.querySelectorAll('.buttons_wrapper__button');
const scoreboardHistory = document.querySelector('.history');
const scoreboardValue = document.querySelector('.value');

const calc = new SimpleFun();
const diffFun = new DiffFun();

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
		case 'nt':
		case '^':
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
		case 'x2':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1])) {
				calc.updateLastNumInValFromButtons( diffFun.pow(calc.valFromButtons[calc.valFromButtons.length - 1], 2));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case 'x3':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1])) {
				calc.updateLastNumInValFromButtons( diffFun.pow(calc.valFromButtons[calc.valFromButtons.length - 1], 3));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case '2x':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1])) {
				calc.updateLastNumInValFromButtons( diffFun.pow(calc.valFromButtons[calc.valFromButtons.length - 1], 1/2));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case '3x':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1])) {
				calc.updateLastNumInValFromButtons( diffFun.pow(calc.valFromButtons[calc.valFromButtons.length - 1], 1/3));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case '1x':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1])) {
				calc.updateLastNumInValFromButtons( calc.revMult(calc.valFromButtons[calc.valFromButtons.length - 1]));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case 'AC':
			calc.currentResult = '';
			calc.valFromButtons = [];
			break;
		case '+/-':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1])) {
				calc.updateLastNumInValFromButtons(diffFun.changeSign(calc.valFromButtons[calc.valFromButtons.length - 1], 2));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case '%':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1])) {
				calc.updateLastNumInValFromButtons(diffFun.percent(calc.valFromButtons[calc.valFromButtons.length - 1], 2));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case 'ex':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1])) {
				calc.updateLastNumInValFromButtons(diffFun.exp(calc.valFromButtons[calc.valFromButtons.length - 1], 2));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case '10x':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1])) {
				calc.updateLastNumInValFromButtons(diffFun.pow(10, calc.valFromButtons[calc.valFromButtons.length - 1]));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case 'ln':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1]) && calc.valFromButtons[calc.valFromButtons.length - 1] !== 0) {
				calc.updateLastNumInValFromButtons(diffFun.ln(calc.valFromButtons[calc.valFromButtons.length - 1]));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case 'log10':
			if (calc.isNum(calc.valFromButtons[calc.valFromButtons.length - 1]) && calc.valFromButtons[calc.valFromButtons.length - 1] > 0) {
				calc.updateLastNumInValFromButtons(diffFun.log10(calc.valFromButtons[calc.valFromButtons.length - 1]));
				calc.currentResult = calc.valFromButtons[calc.valFromButtons.length - 1];
			}
			break;
		case 'mc':
			if (calc.isNum(calc.currentResult) && calc.valFromButtons.length == 0 ) {
				calc.memoriseClear();
			}
			break;
		case 'm+':
			if (calc.isNum(calc.currentResult) && calc.valFromButtons.length == 0 ) {
				calc.memoriseSum();
			}
			break;
		case 'm-':
			if (calc.isNum(calc.currentResult) && calc.valFromButtons.length == 0 ) {
				calc.memoriseMinus();
			}
			break;
		case 'mr':
			calc.makeExpr(calc.memoriseNum);
			break;
		case 'Backspace':
			calc.del();
			break;
		default:
			break;
		}
		showCurrentValue();
	};
};

window.calc = calc;