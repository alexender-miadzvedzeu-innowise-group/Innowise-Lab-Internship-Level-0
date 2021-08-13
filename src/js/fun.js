export default class Calc {
	constructor() {
		this.valFromButtons = [];
		this.currentResult = 0;
	}

	sum(a, b) {
		return a * 1 + b * 1;
	}

	minus(a, b) {
		return a * 1 - b * 1;
	}

	mult(a, b) {
		return a * b;
	}

	divide(a, b) {
		if (b !== 0) {
			return a / b;
		} else return new Error('на ноль делить нельзя!');
	}

	_isNum(key) {
		const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		return numbers.includes(key[0]);
	}

	makeExpr(key) {
		if (
			this.valFromButtons.length !== 0 &&
			this._isNum(this.valFromButtons[this.valFromButtons.length - 1]) &&
			!this._isNum(key)
		) {
			this.valFromButtons.push(key);
		} else if (
			this.valFromButtons.length !== 0 &&
			!this._isNum(this.valFromButtons[this.valFromButtons.length - 1]) &&
			this._isNum(key)
		) {
			this.valFromButtons.push(key);
		} else if (
			this.valFromButtons.length !== 0 &&
			!this._isNum(this.valFromButtons[this.valFromButtons.length - 1]) &&
			!this._isNum(key)
		) {
			this.valFromButtons.splice(this.valFromButtons.length - 1, 1);
			this.valFromButtons.push(key);
		} else if (
			this.valFromButtons.length !== 0 &&
			this._isNum(this.valFromButtons[this.valFromButtons.length - 1]) &&
			this._isNum(key)
		) {
			this.valFromButtons[this.valFromButtons.length - 1] += key;
		} else if (this.valFromButtons.length === 0 && this._isNum(key)) {
			this.valFromButtons.push(key);
		}
		this.currentResult = key;
	}

	resultExpression(arr = this.valFromButtons) {
		!this._isNum(arr[arr.length - 1]) ? arr.splice([arr.length - 1], 1) : null;
		for (let i = 0; i < arr.length; i++) {
			switch (arr[i]) {
			case '/':
				arr[i] = calc.divide(arr[i - 1], arr[i + 1]);
				arr[i - 1] = arr[i + 1] = '';
				break;
			case '*':
				arr[i] = calc.mult(arr[i - 1], arr[i + 1]);
				arr[i - 1] = arr[i + 1] = '';
				break;
			default:
				break;
			}
		}

		let filterdArr = arr.filter((el) => el.toString().length > 0);
		arr = filterdArr;
		for (let i = 0; i < arr.length; i++) {
			switch (arr[i]) {
			case '-':
				arr[i] = calc.minus(arr[i - 1], arr[i + 1]);
				arr[i - 1] = arr[i + 1] = '';
				break;
			case '+':
				arr[i] = calc.sum(arr[i - 1], arr[i + 1]);
				arr[i - 1] = arr[i + 1] = '';
				break;
			default:
				break;
			}
		}

		filterdArr = arr.filter((el) => el.toString().length > 0);
		arr = filterdArr;
		let result = 0;

		for (const el of arr) {
			result += el * 1;
		}
		this.currentResult = result;
    this.valFromButtons = [];
		return result;
	}
}