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
		//заменить на slice()
		let history = [...calc.valFromButtons].splice(0, [...calc.valFromButtons].length - 1).join('');
		//заменить на slice()
		scoreboardHistory.textContent = history;
		scoreboardValue.textContent = calc.currentResult;
	} else {
		scoreboardHistory.textContent = '';
		scoreboardValue.textContent = calc.currentResult;
	}
};

for (const button of buttons) { // использовать forEach
	//вынести в отдельный файл
	button.onclick = (e) => {
		const key = e.target.getAttribute('data-key');
		switch (key) {
		case '(':
		case ')':
			calc.bracketsValidation(undefined, key) ? calc.makeExpr(key) : null;
			break;
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
			calc.executeExpressionWithParentheses();
			break;
		case 'x2':
			if (calc.isNum(calc.lastElemInValues())) {
				calc.updateLastNumInValFromButtons(diffFun.pow(calc.lastElemInValues(), 2));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case 'x3':
			if (calc.isNum(calc.lastElemInValues())) {
				calc.updateLastNumInValFromButtons( diffFun.pow(calc.lastElemInValues(), 3));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case '2x':
			if (calc.isNum(calc.lastElemInValues())) {
				calc.updateLastNumInValFromButtons( diffFun.pow(calc.lastElemInValues(), 1/2));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case '3x':
			if (calc.isNum(calc.lastElemInValues())) {
				calc.updateLastNumInValFromButtons( diffFun.pow(calc.lastElemInValues(), 1/3));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case '1x':
			if (calc.isNum(calc.lastElemInValues())) {
				calc.updateLastNumInValFromButtons(calc.revMult(calc.lastElemInValues()));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case 'AC':
			calc.currentResult = '';
			calc.valFromButtons = [];
			break;
		case '+/-':
			if (calc.isNum(calc.lastElemInValues())) {
				calc.updateLastNumInValFromButtons(diffFun.changeSign(calc.lastElemInValues(), 2));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case '%':
			if (calc.isNum(calc.lastElemInValues())) {
				calc.updateLastNumInValFromButtons(diffFun.percent(calc.lastElemInValues(), 2));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case 'ex':
			if (calc.isNum(calc.lastElemInValues())) {
				calc.updateLastNumInValFromButtons(diffFun.exp(calc.lastElemInValues(), 2));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case '10x':
			if (calc.isNum(calc.lastElemInValues())) {
				calc.updateLastNumInValFromButtons(diffFun.pow(10, calc.lastElemInValues()));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case 'ln':
			if (calc.isNum(calc.lastElemInValues()) && calc.lastElemInValues() !== 0) {
				calc.updateLastNumInValFromButtons(diffFun.ln(calc.lastElemInValues()));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case 'log10':
			if (calc.isNum(calc.lastElemInValues()) && calc.lastElemInValues() > 0) {
				calc.updateLastNumInValFromButtons(diffFun.log10(calc.lastElemInValues()));
				calc.currentResult = calc.lastElemInValues();
			}
			break;
		case 'mc':
			if (calc.isNum(calc.currentResult) && calc.valFromButtons.length === 0 ) {
				calc.memoriseClear();
			}
			break;
		case 'm+':
			if (calc.isNum(calc.currentResult) && calc.valFromButtons.length === 0 ) {
				calc.memoriseSum();
			}
			break;
		case 'm-':
			if (calc.isNum(calc.currentResult) && calc.valFromButtons.length === 0 ) {
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
window.onload = () => {
	calc.currentResult = calc.lastElemInValues();
	showCurrentValue();
};
