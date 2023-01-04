interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Moses',
  lastName: 'Brown',
  age: 25,
  location: 'Lagos',
}

const student2: Student = {
  firstName: 'Daniel',
  lastName: 'Kent',
  age: 23,
  location: 'Abuja',
}

const studentsList = [student1, student2];
let table = document.createElement('table')
document.body.appendChild(table);

studentsList.forEach((row) => {
  let tr = table.insertRow();
  tr.insertCell().innerText = row.firstName;
  tr.insertCell().innerText = row.location;
});
