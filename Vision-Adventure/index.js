document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get values from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if the username has more than three characters
  if (username.length > 3) {
    // Retrieve registration data from local storage
    var registeredUsername = localStorage.getItem('registeredUsername');
    var registeredPassword = localStorage.getItem('registeredPassword');

    // Dummy validation (replace with your actual authentication logic)
    if (username === registeredUsername && password === registeredPassword) {
      // Redirect to the home page
      window.location.href = 'home.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  } else {
    alert('Username must have more than three characters.');
  }
});
