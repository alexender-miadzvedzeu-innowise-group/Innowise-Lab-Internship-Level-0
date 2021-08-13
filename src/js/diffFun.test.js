import DiffFun from './diffFun.js';

const diffFun = new DiffFun();

test('pow test', () => {
	expect(diffFun.pow(10, 4)).toBe(10000);
});

test('changeSign test', () => {
	expect(diffFun.changeSign(5)).toBe(-5);
});

test('changeSign test', () => {
	expect(diffFun.changeSign(-5)).toBe(5);
});

test('percent test', () => {
	expect(diffFun.percent(55)).toBe(0.55);
});

test('exp test', () => {
	expect(diffFun.exp(-1)).toBe(0.36787944117144233);
});

test('exp test', () => {
	expect(diffFun.exp(0)).toBe(1);
});

test('exp test', () => {
	expect(diffFun.exp(1)).toBe(2.718281828459045);
});

test('ln test', () => {
	expect(diffFun.ln(1)).toBe(0);
});

test('ln test', () => {
	expect(diffFun.ln(10)).toBe(2.302585092994046);
});

test('log10 test', () => {
	expect(diffFun.log10(1)).toBe(0);
});

test('log10 test', () => {
	expect(diffFun.log10(2)).toBe(0.3010299956639812);
});

test('log10 test', () => {
	expect(diffFun.log10(100000)).toBe(5);
});