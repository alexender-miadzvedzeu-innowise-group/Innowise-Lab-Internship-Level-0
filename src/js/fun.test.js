import SimpleCalcFun from './fun.js';

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
	expect(calc._isNum('1256')).toBe(true);
});

test('_isNum test', () => {
	expect(calc._isNum('dfg')).toBe(false);
});