export default function updateStudentGradeByCity (studentList, city, newGrades) {
    if (Array.isArray(studentList) && Array.isArray(newGrades)) {
        const selectedStudents = studentList.filter(student => student.location === city);
        return selectedStudents.map(student => updateGrade(student, newGrades));
    } else {
        return [];
    };

    function updateGrade(student, newGrades) {
        let grade = 'N/A';
        for (const obj of newGrades) {
            if (obj.studentId === student.id) {
                grade = obj.grade;
            }
        }
        student.grade = grade;
        return student;
    }
}
