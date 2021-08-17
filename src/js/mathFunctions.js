export default class MathFunctions {
	pow(a, b) {
		return Math.pow(a, b);
	}
	changeSign(num) {
		return -1 * num;
	}
	percent(num) {
		return num * 0.01;
	}
	exp(num) {
		return Math.exp(num);
	}
	ln(num) {
		return Math.log(num);
	}
	log10(num) {
		return Math.log10(num);
	}
	sum(a, b) {
		return Number(a) + Number(b);
	}

	minus(a, b) {
		return Number(a) - Number(b);
	}

	mult(a, b) {
		return a * b;
	}

	revMult(a) {
		return 1 / a;
	}

	divide(a, b) {
		return a / b;
	}
}
