export default function updateStudentGradeByCity(array, city, newGrades) {
  const filtered = array.filter((ele) => ele.location === city);
  return filtered.map((ele) => {
    const fil = newGrades.filter((elem) => elem.studentId === ele.id);
    const val = ele;
    val.grade = fil.length > 0 ? fil[0].grade : 'N/A';
    return val;
  });
}
