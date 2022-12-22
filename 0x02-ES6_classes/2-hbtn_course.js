/**
 * Holberton School Class
 */

export default class HolbertonCourse {
  /**
   * HolbertonCourse class definition
   * @param {String} name - Course Name
   * @param {Number} length - Length of course
   * @param {Array} students - Name of students
   */

  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw new TypeError('Students must be array of strings');
    }
    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
