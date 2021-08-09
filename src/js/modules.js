export const sqNt = ({ valuesFromButtons, n }) => {
	for (let i = valuesFromButtons.length - 1; i >= 0; i--) {
		return valuesFromButtons[i] = Math.pow(valuesFromButtons[i], n);
		// if (isNumber(valuesFromButtons[i])) {
			
		// } else break;
	}
};

export const calculateExpression = arr => {
	return eval(arr.join(''));
};


