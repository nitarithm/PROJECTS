function topStudents(array) {
    const topstudents =
    array.filter(function(student){
        return student.grade >= 90;
    });

    return topstudents;
}

module.exports = topStudents;