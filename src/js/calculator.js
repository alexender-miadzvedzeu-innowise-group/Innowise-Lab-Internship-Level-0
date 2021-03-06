export default class Calculator {
	constructor() {
		this.valFromButtons = [];
		this.currentResult = 0;
		this.memoriseNum = 0;
	}

	lastElemInValues(arr = this.valFromButtons) {
		return arr.length > 0 ? [...arr].pop() : [];
	}

	setLastElemInValues(elem) {
		return this.valFromButtons[this.valFromButtons.length - 1] = elem;
	}

	udateLastElemInValues(elem) {
		return this.valFromButtons[this.valFromButtons.length - 1] += elem;
	}

	sum(a, b) {
		return Number(a) + Number(b);
	}

	minus(a, b) {
		return Number(a) - Number(b);
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

	pow(a, b) {
		return Math.pow(a, b);
	}

	changeSign(num) {
		return -1 * num;
	}

	percent(num) {
		return num * 0.01;
	}

	exp(num) {
		return Math.exp(num);
	}

	ln(num) {
		return Math.log(num);
	}

	log10(num) {
		return Math.log10(num);
	}

	isNum(key) {
		return !isNaN(key.toString()[key.toString().length - 1]);
	}

	del() {
		if (this.lastElemInValues().length > 1) {
			this.setLastElemInValues(this.lastElemInValues().substring(0, this.lastElemInValues().length - 1));
			this.currentResult = this.lastElemInValues();
		} else {
			this.valFromButtons.splice(this.valFromButtons.length - 1, 1);
			this.currentResult = this.lastElemInValues();
		}
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

	bracketsValidation(arr = this.valFromButtons, key) {
		switch (key) {
		case '(':
			return arr.filter(el => el === '(' || el === ')').every((el, key, array) => {
				if (
					arr[arr.length - 1] !== ')' &&
					array.length % 2 === 0 &&
					key % 2 === 0 && array[key] === '(' ||
					key % 2 !== 0 && array[key] === ')'
				) {
					return true;
				} else false;
			});
		case ')':
			if (arr.filter(el => el === '(' || el === ')').length !== 0) {
				return arr.filter((el) => el === '(' || el === ')').every((el, key, array) => {
					if (
						arr[arr.length - 1] !== '(' && 
						array.length % 2 !== 0 && 
						key % 2 === 0 && array[key] === '(' || 
						key % 2 !== 0 && array[key] === ')'
					) {
						return true;
					} else false;
				});
			} else return false;
		default:
			false;
			break;
		}
	}

	makeExpr(key) {
		if (
			(key === '.' && this.isNum(this.lastElemInValues())) ||
			(this.valFromButtons.length !== 0 && this.lastElemInValues().endsWith('.') && this.isNum(key)) ||
			(this.valFromButtons.length !== 0 && this.isNum(this.lastElemInValues()) && this.isNum(key))
		) {
			this.udateLastElemInValues(key);
		} else if (
			this.valFromButtons.length === 0 ||
			(this.valFromButtons.length !== 0 && this.isNum(this.lastElemInValues()) && !this.isNum(key) && key !== '(') || // [...'5'] + '+' => [...'5', '+']
			(this.valFromButtons.length !== 0 && !this.isNum(this.lastElemInValues()) && key === '(') || // [...'+'] + '(' => [...'+', '(']
			(this.valFromButtons.length !== 0 && this.lastElemInValues() === ')' && !this.isNum(key)) || // [...')'] + '+' => [...')', '+']
			(this.valFromButtons.length !== 0 && !this.isNum(this.lastElemInValues()) && this.isNum(key) && this.lastElemInValues() !== ')') // [...'+'] + '5 => [...'+', '5']
		) {
			this.valFromButtons.push(key);
		} else if (
			(this.valFromButtons.length !== 0 && !this.isNum(this.lastElemInValues()) && this.lastElemInValues() === ')' && this.isNum(key)) ||
			(this.valFromButtons.length !== 0 && !this.isNum(this.lastElemInValues()) && this.lastElemInValues() !== ')' && this.lastElemInValues() !== '(' && !this.isNum(key))
		) {
			this.setLastElemInValues(key);
		}
		this.currentResult = this.lastElemInValues();
	}

	_clearArr(arr) {
		return arr.filter((el) => el.toString().length > 0);
	}
	_executeExpression(arr = this.valFromButtons) {
		!this.isNum(arr[arr.length - 1]) ? arr.splice([arr.length - 1], 1) : null;
		for (let i = 0; i < arr.length; i++) {
			switch (arr[i]) {
			case '/':
				if (arr[i + 1] != 0) {
					arr[i] = this.divide(arr[i - 1], arr[i + 1]);
					arr[i - 1] = arr[i + 1] = '';
				} else {
					return alert('???? ???????? ???????????? ????????????');
				}
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

		arr = this._clearArr(arr);

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

		arr = this._clearArr(arr);

		this.currentResult = 0;

		arr.forEach((el) => (this.currentResult += Number(el)));

		this.valFromButtons = [];
		this.valFromButtons.push(this.currentResult.toString());
		return this.currentResult;
	}

	executeExpressionWithParentheses(arr = this.valFromButtons) {
		let from = 0;
		let to = 0;
		let arrInParentheses = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === '(') {
				from = i;
			} else if (arr[i] === ')') {
				to = i;
				arrInParentheses = arr.slice(from + 1, to);
				arr[from] = this._executeExpression(arrInParentheses).toString();
				arr.fill('', from + 1, to + 1);
			}
		}

		arr = this._clearArr(arr);
		
		return this._executeExpression(arr);
	}

	updateLastNumInValFromButtons(num) {
		this.valFromButtons[this.valFromButtons.length - 1] = num.toString();
	}
}