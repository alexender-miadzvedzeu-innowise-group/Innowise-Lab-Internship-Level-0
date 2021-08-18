import SimpleCalcFun from './calculator.js';

const calc = new SimpleCalcFun();

test('sum test', () => {
	expect(calc.sum(10, 4)).toBe(14);
});

test('minus test', () => {
	expect(calc.minus(10, 4)).toBe(6);
});

test('mult test', () => {
	expect(calc.mult(10, 4)).toBe(40);
});

test('mult test', () => {
	expect(calc.divide(10, 4)).toBe(2.5);
});


test('pow test', () => {
	expect(calc.pow(10, 4)).toBe(10000);
});

test('changeSign test', () => {
	expect(calc.changeSign(5)).toBe(-5);
});

test('changeSign test', () => {
	expect(calc.changeSign(-5)).toBe(5);
});

test('percent test', () => {
	expect(calc.percent(55)).toBe(0.55);
});

test('exp test', () => {
	expect(calc.exp(-1)).toBe(0.36787944117144233);
});

test('exp test', () => {
	expect(calc.exp(0)).toBe(1);
});

test('exp test', () => {
	expect(calc.exp(1)).toBe(2.718281828459045);
});

test('ln test', () => {
	expect(calc.ln(1)).toBe(0);
});

test('ln test', () => {
	expect(calc.ln(10)).toBe(2.302585092994046);
});

test('log10 test', () => {
	expect(calc.log10(1)).toBe(0);
});

test('log10 test', () => {
	expect(calc.log10(2)).toBe(0.3010299956639812);
});

test('log10 test', () => {
	expect(calc.log10(100000)).toBe(5);
});

test('_isNum test', () => {
	expect(calc.isNum('1256')).toBe(true);
});

test('_isNum test', () => {
	expect(calc.isNum('dfg')).toBe(false);
});

test('executeExpressionWithParentheses test', () => {
	expect(calc.executeExpressionWithParentheses(['2', '+', '2', '*', '2'])).toBe(6);
});

test('executeExpressionWithParentheses test', () => {
	expect(calc.executeExpressionWithParentheses(['25', '*', '6', '+', '6', '-', '9', '*', '2', '+', '5', '*', '5'])).toBe(163);
});

test('executeExpressionWithParentheses test', () => {
	expect(calc.executeExpressionWithParentheses(['2', '+', '6', '*', '3', '-', '2', '*', '(', '20', '+', '50', ')'])).toBe(-120);
});
