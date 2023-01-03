export default function getStudentIdsSum(array) {
  return array.reduce((acc, curval) => acc + curval, 0);
}
