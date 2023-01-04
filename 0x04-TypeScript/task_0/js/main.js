var student1 = {
    firstName: 'Moses',
    lastName: 'Brown',
    age: 25,
    location: 'Lagos'
};
var student2 = {
    firstName: 'Daniel',
    lastName: 'Kent',
    age: 23,
    location: 'Abuja'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function (row) {
    var tr = table.insertRow();
    tr.insertCell().innerText = row.firstName;
    tr.insertCell().innerText = row.location;
});
