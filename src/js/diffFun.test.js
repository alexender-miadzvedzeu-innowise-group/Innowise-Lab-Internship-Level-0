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
