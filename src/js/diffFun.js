import SimpleFun from './simpleFun';

export default class DiffFun extends SimpleFun {
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
}