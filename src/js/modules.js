export const sqNt = ({ valuesFromButtons, isNumber, n }) => {
	console.log(n);
	for (let i = valuesFromButtons.length - 1; i >= 0; i--) {
		valuesFromButtons[i];
		if (isNumber(valuesFromButtons[i])) {
			valuesFromButtons[i] = Math.pow(valuesFromButtons[i], n);
		} else break;
	}
};