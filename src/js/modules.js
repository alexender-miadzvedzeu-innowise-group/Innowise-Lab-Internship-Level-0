export const findLastNumber = (arr) => {
	let lastNumber = '';
	if (arr.every((elem) => isNumber(elem))) {
		lastNumber = arr.join('');
		arr.splice(0);
		arr.push(lastNumber);
		return lastNumber;
	} else {
		for (let i = arr.length - 1; i >= 0; i--) {
			const element = arr[i];
			if (isNumber(element)) {
				lastNumber += element;
			} else {
				lastNumber = lastNumber.split('').reverse().join('');
				arr.splice(i + 1);
				arr.push(lastNumber);
				return lastNumber;
			}
		}
	}
};

export const isNumber = (key) => {
	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	return numbers.includes(String(key));
};

export const sqNt = ({ valuesFromButtons, n }) => {
	for (let i = valuesFromButtons.length - 1; i >= 0; i--) {
		return (valuesFromButtons[i] = Math.pow(valuesFromButtons[i], n));
	}
};

export const tenInX = ({ valuesFromButtons, n }) => {
	for (let i = valuesFromButtons.length - 1; i >= 0; i--) {
		return (valuesFromButtons[i] = Math.pow(10, valuesFromButtons[i]));
	}
};

export const calculateExpression = (arr) => {
	return eval(arr.join(''));
};

export const expInDegree = ({ valuesFromButtons }) => {
	for (let i = valuesFromButtons.length - 1; i >= 0; i--) {
		return (valuesFromButtons[i] = Math.exp(valuesFromButtons[i]));
	}
};

export const log10 = ({ valuesFromButtons }) => {
	for (let i = valuesFromButtons.length - 1; i >= 0; i--) {
		return (valuesFromButtons[i] = Math.log10(valuesFromButtons[i]));
	}
};

export const ln = ({ valuesFromButtons }) => {
	for (let i = valuesFromButtons.length - 1; i >= 0; i--) {
		return (valuesFromButtons[i] = Math.log(valuesFromButtons[i]));
	}
};

export const backspace = ({ valuesFromButtons }) => {
	valuesFromButtons.splice(valuesFromButtons.length - 1, 1);
};

export const findZeroAfterSlash = ({ valuesFromButtons }) => {
	for (let i = 0; i < valuesFromButtons.length; i++) {
		if (valuesFromButtons[i] == '0' && valuesFromButtons[i - 1] == '/') {
			return true;
		} 
	}
	return false;
};
