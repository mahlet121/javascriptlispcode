
function validator(str) {
	const valid = str.split('').reduce((sum, parent) => {
		if (sum < 0) {
			return sum;
		} else if (parent === '(') {
			return ++sum;
		} else if (parent === ')') {
			return --sum;
		}
		return sum;
	}, 0);
	return valid === 0;
}
const resultTrue = '(())()()';
const resultFalse = '())()';
const resultFalse2 = ')(';

console.log(validator(resultTrue)); // true
console.log(validator(resultFalse)); // false
console.log(validator(resultFalse2)); //false


