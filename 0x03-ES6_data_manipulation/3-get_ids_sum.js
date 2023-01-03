export default function getStudentIdsSum(array) {
  return array.reduce((acc, curval) => acc + curval.id, 0);
}
