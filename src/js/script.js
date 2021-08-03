let buttons = document.querySelectorAll('.buttons_wrapper__button');
let scoreboardValue = document.querySelector('.calc_wrapper__scoreboard .value');

const resultButton = document.querySelector('.buttons_wrapper__button.result');

for (const button of buttons) {
	button.addEventListener('click', () => {
		updateScoreboardValue(button);
	});
}

let scoreboardResult = '';
const updateScoreboardValue = (button) => {
	const buttonContent = button.textContent;
	scoreboardResult += buttonContent;
	const preLastSymbol = scoreboardResult[scoreboardResult.length - 2];
	const lastSymbol = scoreboardResult[scoreboardResult.length - 1];

	if (
		(preLastSymbol === '/' ||
			preLastSymbol === '*' ||
			preLastSymbol === '-' ||
			preLastSymbol === '+') &&
		!scoreboardResult.includes(')') &&
		!scoreboardResult.includes('(') &&
		preLastSymbol &&
		lastSymbol * 1 >= 0 &&
		lastSymbol * 1 <= 9
	) {
		scoreboardValue.textContent = eval(scoreboardResult);
	} else if (
		(scoreboardResult.includes('/') ||
			scoreboardResult.includes('*') ||
			scoreboardResult.includes('-') ||
			scoreboardResult.includes('+')) &&
		preLastSymbol &&
		preLastSymbol * 1 >= 0 &&
		preLastSymbol * 1 <= 9 &&
		lastSymbol * 1 >= 0 &&
		lastSymbol * 1 <= 9
	) {
		scoreboardResult = buttonContent;
		scoreboardValue.textContent = scoreboardResult;
	} else if (
		!scoreboardResult.includes('/') ||
		!scoreboardResult.includes('*') ||
		!scoreboardResult.includes('-') ||
		!scoreboardResult.includes('+')
	) {
		scoreboardValue.textContent = scoreboardResult;
	} else if (buttonContent == '=') {

	}
};
