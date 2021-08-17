import MathFunctions from './mathFunctions.js';

const mathFunctions = new MathFunctions();

test('pow test', () => {
	expect(mathFunctions.pow(10, 4)).toBe(10000);
});

test('changeSign test', () => {
	expect(mathFunctions.changeSign(5)).toBe(-5);
});

test('changeSign test', () => {
	expect(mathFunctions.changeSign(-5)).toBe(5);
});

test('percent test', () => {
	expect(mathFunctions.percent(55)).toBe(0.55);
});

test('exp test', () => {
	expect(mathFunctions.exp(-1)).toBe(0.36787944117144233);
});

test('exp test', () => {
	expect(mathFunctions.exp(0)).toBe(1);
});

test('exp test', () => {
	expect(mathFunctions.exp(1)).toBe(2.718281828459045);
});

test('ln test', () => {
	expect(mathFunctions.ln(1)).toBe(0);
});

test('ln test', () => {
	expect(mathFunctions.ln(10)).toBe(2.302585092994046);
});

test('log10 test', () => {
	expect(mathFunctions.log10(1)).toBe(0);
});

test('log10 test', () => {
	expect(mathFunctions.log10(2)).toBe(0.3010299956639812);
});

test('log10 test', () => {
	expect(mathFunctions.log10(100000)).toBe(5);
});