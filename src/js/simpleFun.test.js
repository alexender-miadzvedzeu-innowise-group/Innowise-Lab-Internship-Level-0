import SimpleCalcFun from './simpleFun.js';

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