import makeExpression from './script.js';
import addSignToExpression from './script.js';
import calculateExpression from './script.js';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});