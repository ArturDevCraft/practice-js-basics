const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

let addition = parseFloat(a) + b;
let substraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulo = a % b;
let increment = a;
increment++;
let decrement = a;
decrement--;

console.log(
	addition,
	substraction,
	multiplication,
	division,
	modulo,
	increment,
	decrement
);

if (addition > 20) {
	console.log('Addition result is grtater than 20');
}

if (substraction > 20) {
	console.log('Substraction result is grtater than 20');
}

if (multiplication > 20) {
	console.log('Multiplication result is grtater than 20');
}

if (division > 20) {
	console.log('Division result is grtater than 20');
}

if (modulo > 20) {
	console.log('Modulo result is grtater than 20');
}

if (increment > 20) {
	console.log('Incrementation result is grtater than 20');
}

if (decrement > 20) {
	console.log('Decrementation result is grtater than 20');
}
