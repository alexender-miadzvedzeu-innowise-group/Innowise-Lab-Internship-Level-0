import { calculateExpression, sqNt, isNumber } from './modules.js';

test('sum test', () => {
	expect(calculateExpression(['1', '+', '1'])).toBe(2);
});

test('minus test', () => {
	expect(calculateExpression(['1', '-', '1'])).toBe(0);
});

test('divide test', () => {
	expect(calculateExpression(['1', '/', '2'])).toBe(0.5);
});

test('multiply test', () => {
	expect(calculateExpression(['2', '*', '2'])).toBe(4);
});

test('degree 2', () => {
	expect(sqNt({
		valuesFromButtons: ['1', '+', '2'], 
		n:2
	})).toBe(4);
});

test('degree 3', () => {
	expect(sqNt({
		valuesFromButtons: ['1', '+', '2'], 
		n:3
	})).toBe(8);
});

test('degree 5', () => {
	expect(sqNt({
		valuesFromButtons: ['1', '+', '5'], 
		n:3
	})).toBe(125);
});