function sortStudents(students) {

    students.sort((a,b) => (parseFloat(b.grade) - parseFloat(a.grade)));
    students.sort((a,b) => (b.graduated - a.graduated));    
    console.log(students)
}

module.exports = sortStudents;