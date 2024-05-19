document.addEventListener('DOMContentLoaded', function() {
    const studentTableBody = document.getElementById('studentTableBody');
    const searchInput = document.querySelector('input[type="search"]');

    
    const students = JSON.parse(localStorage.getItem('student')) || [];

   
    function addTableRow(student) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${student.firstName} ${student.middleName} ${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.dob}</td>
            <td>${student.gender}</td>
            <td>${student.phoneNumber}</td>
        `;
        studentTableBody.appendChild(newRow);
    }

  
    function filterTable() {
        const searchText = searchInput.value.trim().toLowerCase();
        const rows = studentTableBody.getElementsByTagName('tr');

        Array.from(rows).forEach(row => {
            const fullName = row.cells[0].textContent.toLowerCase();
            row.style.display = fullName.includes(searchText) ? '' : 'none';
        });
    }

   
    searchInput.addEventListener('input', filterTable);


    students.forEach(addTableRow);
});
