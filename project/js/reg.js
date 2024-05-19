document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const errors = [];

        const firstName = document.getElementById('firstName').value.trim();
        const middleName = document.getElementById('middleName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const gender = document.getElementById('gender').value.trim();
        const role = document.getElementById('role').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (firstName === '') {
            errors.push('First name is required');
        }
        if (middleName === '') {
            errors.push('Middle name is required');
        }
        if (lastName === '') {
            errors.push('Last name is required');
        }
        if (dob === '') {
            errors.push('Date of Birth is required');
        }
        if (gender === '') {
            errors.push('Gender is required');
        }
        if (role === '') {
            errors.push('Role is required');
        }
        if (email === '') {
            errors.push('Email is required');
        } else if (!isValidEmail(email)) {
            errors.push('Invalid email address');
        }
        if (phone === '') {
            errors.push('Phone number is required');
        } else if (!isValidPhone(phone)) {
            errors.push('Invalid phone number');
        }

        
        if (errors.length > 0) {
            displayErrors(errors);
            return;
        }

        
        const newUser = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            dob: dob,
            gender: gender,
            email: email,
            phoneNumber: phone,
            role: role
        };

        
        const roleKey = role === 'teacher' ? 'teacher' : 'student';

        let users = JSON.parse(localStorage.getItem(roleKey)) || [];

       
        users.push(newUser);

       
        localStorage.setItem(roleKey, JSON.stringify(users));

        form.reset();

      
        alert('Registration successful!');

        
    });
});


function displayErrors(errors) {
    const errorList = document.getElementById('errorList');
    errorList.innerHTML = ''; 
    errors.forEach(function(error) {
        const li = document.createElement('li');
        li.textContent = error;
        errorList.appendChild(li);
    });
}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/; 
    return phoneRegex.test(phone);
}
