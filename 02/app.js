/* rozwiązanie z pętlą for */
const x = parseInt(prompt('Podaj liczbę do mnożenia (od 1 do 9)'));

if (x > 0 && x <= 9) {
	for (let i = 1; i <= 9; i++) {
		console.log(`${x} x ${i} = ${x * i}`);
	}
} else {
	alert('Podana liczba nie jest z zakresu od 1 do 9');
}

/* rozwiązanie z pętlą while  */

const a = parseInt(prompt('Podaj podstawę potęgi'));
const n = parseInt(prompt('Podaj wykładnik potęgi'));

let i = 1;
let result = a;
let resultMethod = a;

if (n === 0) {
	result = 1;
} else if (n < 0) {
	i = -1;
	while (i > n) {
		result *= a;
		resultMethod = resultMethod + ' x ' + a;
		i--;
	}
	resultMethod = '1 / (' + resultMethod + ')';
	result = 1 / result;
} else {
	while (i < n) {
		result *= a;
		resultMethod = resultMethod + ' x ' + a;
		i++;
	}
}

console.log(resultMethod + ' = ' + result);
