 let x=  document.getElementById('menu');
 let mIcon = document.getElementById('menuicon');
 let cIcon = document.getElementById('closeicon');

 function openMenu(){
    x.style.display ='block';
    cIcon.style.display='block';
    mIcon.style.display='none';

 }
 function closemenu(){
    x.style.display ='none';
    cIcon.style.display='none';
    mIcon.style.display='block';

 }

 document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Validate mobile number (10 digits)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        errorMessage.textContent = 'Please enter a valid 10-digit mobile number.';
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Check password match
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // If all validations pass
    alert('Registration Successful!');
    // Here you can proceed to submit the form or perform further actions
});


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Create an object to hold the form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value
    };

    // Log the form data to the console
    console.log('Form Data:', formData);
});