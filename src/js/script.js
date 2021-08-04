const buttons = document.querySelectorAll('.buttons_wrapper__button');
const scoreboardValue = document.querySelector('.value'); 

for (const button of buttons) {
	button.addEventListener('click', () => {
		makeExpression(button.getAttribute('data-key'))
		button.getAttribute('data-key') === 'equal' ? count() : null;
	})
}

window.addEventListener('keydown', (e) => {
	makeExpression(e.key);
	e.key === '=' || e.key === 'Enter' ? count() : null;
})

let expression = '';

const makeExpression = (value) => {
	
	const expArr = [
		'1', '2', '3',
		'4', '5', '6',
		'7', '8', '9',
		'0', '/', '*',
		'-', '+', 'AC',
		'%', '.', '(',
		')'
	];

	if (expArr.includes(value) && expression[0] !== '0' && scoreboardValue.textContent !== 0) {
		expression += value;
		scoreboardValue.textContent = expression;
	} 
}

const count = () => {
	expression.length !== 0 ? expression = eval(expression) : null;
	scoreboardValue.textContent = expression;
	expression === 0 ? expression ='' : null;
}