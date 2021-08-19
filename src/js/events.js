import calculator from './calculator.js';
export const calc = new calculator();

const scoreboardHistory = document.querySelector('.history');
const scoreboardValue = document.querySelector('.value');

const showCurrentValue = () => {
	if (calc.valFromButtons.length > 1) {
		let history = calc.valFromButtons.slice(0, calc.valFromButtons.length - 1).join('');
		scoreboardHistory.textContent = history;
		scoreboardValue.textContent = calc.currentResult;
	} else {
		scoreboardHistory.textContent = '';
		scoreboardValue.textContent = calc.currentResult;
	}
};

export const buttonEvent = (e) => {
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
		calc.valFromButtons.length !== 0 ? calc.executeExpressionWithParentheses() : null;
		break;
	case 'x2':
		if (calc.isNum(calc.lastElemInValues())) {
			calc.updateLastNumInValFromButtons(calc.pow(calc.lastElemInValues(), 2));
			calc.currentResult = calc.lastElemInValues();
		}
		break;
	case 'x3':
		if (calc.isNum(calc.lastElemInValues())) {
			calc.updateLastNumInValFromButtons(calc.pow(calc.lastElemInValues(), 3));
			calc.currentResult = calc.lastElemInValues();
		}
		break;
	case '2x':
		if (calc.isNum(calc.lastElemInValues())) {
			calc.updateLastNumInValFromButtons(calc.pow(calc.lastElemInValues(), 1 / 2));
			calc.currentResult = calc.lastElemInValues();
		}
		break;
	case '3x':
		if (calc.isNum(calc.lastElemInValues())) {
			calc.updateLastNumInValFromButtons(calc.pow(calc.lastElemInValues(), 1 / 3));
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
			calc.updateLastNumInValFromButtons(calc.changeSign(calc.lastElemInValues(), 2));
			calc.currentResult = calc.lastElemInValues();
		}
		break;
	case '%':
		if (calc.isNum(calc.lastElemInValues())) {
			calc.updateLastNumInValFromButtons(calc.percent(calc.lastElemInValues(), 2));
			calc.currentResult = calc.lastElemInValues();
		}
		break;
	case 'ex':
		if (calc.isNum(calc.lastElemInValues())) {
			calc.updateLastNumInValFromButtons(calc.exp(calc.lastElemInValues(), 2));
			calc.currentResult = calc.lastElemInValues();
		}
		break;
	case '10x':
		if (calc.isNum(calc.lastElemInValues())) {
			calc.updateLastNumInValFromButtons(calc.pow(10, calc.lastElemInValues()));
			calc.currentResult = calc.lastElemInValues();
		}
		break;
	case 'ln':
		if (calc.isNum(calc.lastElemInValues()) && calc.lastElemInValues() !== 0) {
			calc.updateLastNumInValFromButtons(calc.ln(calc.lastElemInValues()));
			calc.currentResult = calc.lastElemInValues();
		}
		break;
	case 'log10':
		if (calc.isNum(calc.lastElemInValues()) && calc.lastElemInValues() > 0) {
			calc.updateLastNumInValFromButtons(calc.log10(calc.lastElemInValues()));
			calc.currentResult = calc.lastElemInValues();
		}
		break;
	case 'mc':
		if (calc.isNum(calc.currentResult)) {
			calc.memoriseClear();
		}
		break;
	case 'm+':
		if (calc.isNum(calc.currentResult)) {
			calc.memoriseSum();
		}
		break;
	case 'm-':
		if (calc.isNum(calc.currentResult)) {
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