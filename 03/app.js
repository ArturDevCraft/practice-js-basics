const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const isEven = function (num) {
	if (typeof num !== 'number') {
		return null;
	} else {
		return num % 2 === 0;
	}
};

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);

function getSum(a, b, c) {
	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);

	if (a <= b && a <= c) {
		return b + c;
	} else if (b < a && b <= c) {
		return a + c;
	} else {
		return a + b;
	}
}

function showInfo(x, bool) {
	switch (bool) {
		case null:
			console.log(`Podany argument ${x} nie jest liczbą`);
			break;
		case true:
			console.log(`Podany argument ${x} jest parzysty`);
			break;
		case false:
			console.log(`Podany argument ${x} jest nieparzysty`);
			break;
	}
}

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
