document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    
    if (password !== confirmPassword) {
        alert('Паролі не збігаються!');
        return;
    }

    
    const message = `На ${email} надіслано лист із підтвердженням.`;
    document.getElementById('message').textContent = message;


    document.getElementById('registrationForm').reset();
});