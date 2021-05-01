/**
 * Create a grades object that stores a set of student grades in an object. Provide a
 * function for adding a grade and a function for displaying the student’s grade average.
 */

function students(){
    this.grades = [];
    this.average = averageGrades;
    this.addGrade = addGrade;
}

function mean(accumlator, currentVal){
    return accumlator + currentVal;
}

function averageGrades(){
    var sum = this.grades.reduce(mean);
    return sum/this.grades.length;
}

function addGrade(num){
    return this.grades.push(num);
}

var stud1 = new students();
stud1.addGrade(45);
stud1.addGrade(40);
stud1.addGrade(50);
stud1.addGrade(55);
stud1.addGrade(60);

console.log(stud1.average());


