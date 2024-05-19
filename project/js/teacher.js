document.addEventListener('DOMContentLoaded', function() {
    const teacherTableBody = document.getElementById('teacherTableBody');
    const searchInput = document.querySelector('input[type="search"]');


    const teachers = JSON.parse(localStorage.getItem('teacher')) || [];


    function addTableRow(teacher) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${teacher.firstName} ${teacher.middleName} ${teacher.lastName}</td>
            <td>${teacher.email}</td>
            <td>${teacher.dob}</td>
            <td>${teacher.gender}</td>
            <td>${teacher.phoneNumber}</td>
        `;
        teacherTableBody.appendChild(newRow);
    }

    
    function filterTable() {
        const searchText = searchInput.value.trim().toLowerCase();
        const rows = teacherTableBody.getElementsByTagName('tr');

        Array.from(rows).forEach(row => {
            const fullName = row.cells[0].textContent.toLowerCase();
            row.style.display = fullName.includes(searchText) ? '' : 'none';
        });
    }

  
    searchInput.addEventListener('input', filterTable);

  
    teachers.forEach(addTableRow);
});
