let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(2).innerHTML = document.getElementById('new-end-date').value;

});