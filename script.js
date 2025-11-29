document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent form submission

      const feedbackDiv = document.getElementById('form-feedback');

      // input retrieval and trimming
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // 1. initialize validation variables
      let isValid = true;
      const messages = [];

      // 2. username validation
      if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
      }

      // 3. email validation
      if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push('Email must include "@" and "." characters.');
      }

      // 4. password validation
      if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long.');
      }

      // 5. displaying feedback
      feedbackDiv.style.display = 'block';

      if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
      } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
      }
    });
  } else {
    console.error('Form element not found!');
  }
});