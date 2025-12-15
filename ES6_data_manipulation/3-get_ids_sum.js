export default function getStudentIdsSum (studentList) {
    if (Array.isArray(studentList)) {
        return studentList.reduce((accumulateur, student) => accumulateur + student.id, 0);
    } else {
        return [];
    };
}
