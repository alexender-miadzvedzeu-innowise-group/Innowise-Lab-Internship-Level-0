import {
	sqNt,
	calculateExpression,
	expInDegree,
	tenInX,
	log10,
	findLastNumber,
	isNumber,
	ln,
	findZeroAfterSlash
} from './modules.js';

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

test('2^2', () => {
	expect(sqNt({
		valuesFromButtons: ['1', '+', '2'], 
		n:2
	})).toBe(4);
});

test('2^3', () => {
	expect(sqNt({
		valuesFromButtons: ['1', '+', '2'], 
		n:3
	})).toBe(8);
});

test('5^3', () => {
	expect(sqNt({
		valuesFromButtons: ['1', '+', '5'], 
		n:3
	})).toBe(125);
});

test('4^0.5', () => {
	expect(sqNt({
		valuesFromButtons: ['1', '+', '4'], 
		n: 0.5
	})).toBe(2);
});

test('exp(1)', () => {
	expect(expInDegree({valuesFromButtons:['1', '/', '1']})).toBe(2.718281828459045);
});

test('exp(-1)', () => {
	expect(expInDegree({valuesFromButtons:['1', '/', '-1']})).toBe(0.36787944117144233);
});

test('exp(0)', () => {
	expect(expInDegree({valuesFromButtons:['1', '/', '0']})).toBe(1);
});

test('10X(2)', () => {
	expect(tenInX({valuesFromButtons:['1', '/', '2']})).toBe(100);
});

test('log10(0)', () => {
	expect(log10({valuesFromButtons:['1', '/', '2']})).toBe(0.3010299956639812);
});

test('ln(0)', () => {
	expect(ln({valuesFromButtons:['1', '/', '10']})).toBe(2.302585092994046);
});

test('findLastNumber', () => {
	expect(findLastNumber(['1', '/', '5', '6'])).toBe('56');
});

test('findLastNumber', () => {
	expect(findLastNumber(['1', '6'])).toBe('16');
});

test('isNumber TRUE', () => {
	expect(isNumber(5)).toBe(true);
});

test('isNumber FALSE', () => {
	expect(isNumber('a')).toBe(false);
});

test('findZeroAfterSlash TRUE', () => {
	expect(findZeroAfterSlash({
		valuesFromButtons: ['1', '+', '5', '/', '0']
	})).toBe(true);
});

test('findZeroAfterSlash FALSE', () => {
	expect(findZeroAfterSlash({
		valuesFromButtons: ['1', '+', '5', '/', '5']
	})).toBe(false);
});