document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get values from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Define regular expressions for validation
  var usernameRegex = /^(?=.*[@#$_])[a-zA-Z0-9@#$_.]{8,}$/;
  var passwordRegex = /^(?=.*[@#$_.])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9@#$_.]{8,}$/;

  // Check if the username and password meet the specified criteria
  var errors = [];

  if (username.length < 8) {
    errors.push("Username must contain at least 8 characters.");
  }
  
  if (!/@|#|\$|_|./.test(username)) {
    errors.push("Username must contain a special character (@, #, $, _, or .).");
  }

  if (!/@|#|\$|_|./.test(password)) {
    errors.push("Password must contain at least one special symbol (@, #, $, _, or .).");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("The password must contain at least one UPPERCASE letter.");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("The password must contain at least one lowercase letter.");
  }

  if (!/\d/.test(password)) {
    errors.push("The password must contain at least one number.");
  }

  // Display errors if any
  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    // Store registration data in local storage
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);

    // Perform registration logic here (you may need to send data to a server)
    // For demonstration purposes, let's assume registration is successful
    alert('Registration successful! You can now login.');

    // Redirect to the login page
    window.location.href = 'index.html';
  }
});
