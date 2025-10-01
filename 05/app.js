function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
	if (typeof this.grades[subject] === 'undefined') {
		this.grades[subject] = [];
	}
	this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject = null) {
	let gradesArr;
	if (subject !== null) {
		gradesArr = this.grades[subject];
	} else {
		gradesArr = Object.values(this.grades).flat();
	}

	return (
		gradesArr.reduce((acc, curr) => acc + curr, 0) / gradesArr.length
	).toFixed(2);
};

const artur = new Student('Artur', 'Testowy');

artur.addGrade('maths', 5);
artur.addGrade('maths', 5);
artur.addGrade('maths', 4);
artur.addGrade('maths', 4);
artur.addGrade('physics', 4);
artur.addGrade('physics', 3);
artur.addGrade('physics', 5);

console.log(artur.getAverageGrade('maths'));
console.log(artur.getAverageGrade());
