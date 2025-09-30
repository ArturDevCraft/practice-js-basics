const min = 10;
const max = 200;

const arr = createArray(min, max);
const largest = getLargest(arr);
const avg = getAvg(largest);

console.log('Array: ' + arr);
console.log('10 Largest numbers: ' + largest);
console.log('Average value: ' + avg);

function getAvg(arr) {
	return arr.reduce((a, b) => a + b) / arr.length;
}

function getLargest(arr) {
	return arr.sort((a, b) => b - a).slice(0, 10);
}

function createArray(min, max) {
	const arr = [];
	let number;
	for (let i = 0; i < 20; i++) {
		number = Math.round(Math.random() * (max - min)) + min;
		arr.push(number);
	}
	return arr;
}
