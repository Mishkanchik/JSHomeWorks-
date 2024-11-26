document.getElementById('addContact').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;

    if (name && phone && dob) {
        const tableBody = document.querySelector('#contactsTable tbody');
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        row.appendChild(nameCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = phone;
        row.appendChild(phoneCell);

        const dobCell = document.createElement('td');
        dobCell.textContent = dob;
        row.appendChild(dobCell);

        tableBody.appendChild(row);


        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('dob').value = '';
    } else {
        alert('Будь ласка, заповніть усі поля!');
    }
});
