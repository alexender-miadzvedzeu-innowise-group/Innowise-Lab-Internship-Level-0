import { calculateExpression } from "./modules.js";

test("sum test", () => {
    expect(calculateExpression(['1', '+', '1'])).toBe(2);
});

test("minus test", () => {
    expect(calculateExpression(['1', '-', '1'])).toBe(0);
});

test("divide test", () => {
    expect(calculateExpression(['1', '/', '2'])).toBe(0.5);
});

test("multiply test", () => {
    expect(calculateExpression(['2', '*', '2'])).toBe(4);
});