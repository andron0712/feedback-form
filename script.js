document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();


    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    const successBox = document.getElementById('successMessage');
    successBox.classList.remove('success-visible');

     const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Введіть коректну адресу email.';
        isValid = false;
    }

    if (message.length < 20) {
        document.getElementById('messageError').textContent = 'Повідомлення повинно містити мінімум 20 символів.';
        isValid = false;
    }

    if (isValid) {
        successBox.classList.add('success-visible');
        document.getElementById('feedbackForm').reset();
    }
});
