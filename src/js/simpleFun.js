export default class SimpleFun {
	constructor() {
		this.valFromButtons = [];
		this.currentResult = 0;
		this.memoriseNum = 0;
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

	revMult(a) {
		return 1 / a;
	}

	divide(a, b) {
		return a / b;
	}

	isNum(key) {
		const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		typeof key === 'number' ? key = key.toString() : null;
		return numbers.includes(key[key.length - 1]);
	}

	del() {
		this.valFromButtons.splice(this.valFromButtons.length - 1, 1);
		this.currentResult = this.valFromButtons[this.valFromButtons.length - 1];
	}

	memoriseSum() {
		this.memoriseNum += this.currentResult;
	}

	memoriseMinus() {
		this.memoriseNum -= this.currentResult;
	}

	memoriseClear() {
		this.memoriseNum = 0;
	}

	makeExpr(key) {
		if (
			key == 0 &&
			this.valFromButtons[this.valFromButtons.length - 1] ==='/'
		) {
			alert('На ноль делить нельзя');
		} else if (
			key ==  '.' &&
			this.isNum(this.valFromButtons[this.valFromButtons.length - 1]) ||
			this.valFromButtons.length !== 0 &&
			this.valFromButtons[this.valFromButtons.length - 1].endsWith('.') &&
			this.isNum(key)
		) {
			this.valFromButtons[this.valFromButtons.length - 1] += key;
		} else if (
			this.valFromButtons.length !== 0 &&
			this.isNum(this.valFromButtons[this.valFromButtons.length - 1]) &&
			!this.isNum(key)
		) {
			this.valFromButtons.push(key);
		} else if (
			this.valFromButtons.length !== 0 &&
			!this.isNum(this.valFromButtons[this.valFromButtons.length - 1]) &&
			this.isNum(key)
		) {
			this.valFromButtons.push(key);
		} else if (
			this.valFromButtons.length !== 0 &&
			!this.isNum(this.valFromButtons[this.valFromButtons.length - 1]) &&
			!this.isNum(key)
		) {
			this.valFromButtons.splice(this.valFromButtons.length - 1, 1);
			this.valFromButtons.push(key);
		} else if (
			this.valFromButtons.length !== 0 &&
			this.isNum(this.valFromButtons[this.valFromButtons.length - 1]) &&
			this.isNum(key)
		) {
			this.valFromButtons[this.valFromButtons.length - 1] += key;
		} else if (this.valFromButtons.length === 0 && this.isNum(key)) {
			this.valFromButtons.push(key);
		} 
		this.currentResult = this.valFromButtons[this.valFromButtons.length - 1];
	}

	resultExpression(arr = this.valFromButtons) {
		!this.isNum(arr[arr.length - 1]) ? arr.splice([arr.length - 1], 1) : null;
		for (let i = 0; i < arr.length; i++) {
			switch (arr[i]) {
			case '/':
				arr[i] = this.divide(arr[i - 1], arr[i + 1]);
				arr[i - 1] = arr[i + 1] = '';
				break;
			case '*':
				arr[i] = this.mult(arr[i - 1], arr[i + 1]);
				arr[i - 1] = arr[i + 1] = '';
				break;
			case '^':
				arr[i] = Math.pow(arr[i - 1], arr[i + 1]);
				arr[i - 1] = arr[i + 1] = '';
				break;
			case 'nt':
				arr[i] = Math.pow(arr[i - 1], 1 / arr[i + 1]);
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
				arr[i] = this.minus(arr[i - 1], arr[i + 1]);
				arr[i - 1] = arr[i + 1] = '';
				break;
			case '+':
				arr[i] = this.sum(arr[i - 1], arr[i + 1]);
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
	updateLastNumInValFromButtons(num) {
		this.valFromButtons[this.valFromButtons.length - 1] = num.toString();
	}
}