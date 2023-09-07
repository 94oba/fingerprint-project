document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', handleLogin);
});

function handleLogin(event) {
    event.preventDefault();

    const fullName = document.getElementById('full_name').value;
    const password = document.getElementById('password').value;

    // Simple validation - Ensure both fields are filled
    if (!fullName || !password) {
        alert('Please fill in all required fields.');
        return;
    }

    // If all validations pass, submit the form to the server (replace with your server endpoint)
    const formData = new FormData();
    formData.append('full_name', fullName);
    formData.append('password', password);

    // Placeholder function for fingerprint scanning
    function scanFingerprint() {
        // Implement your fingerprint scanning logic here
        alert("Fingerprint scanned successfully!");
    }

    // Attach click event to the "Scan Fingerprint" button
    document.getElementById("scan_fingerprint").addEventListener("click", function() {
        scanFingerprint();
    });

    // Perform the AJAX request to the server (replace 'login_process.php' with your server endpoint)
    // You can use a library like Axios or fetch API for this.
    // Example with fetch API:
    fetch('login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server (e.g., check if login is successful)
            if (data.success) {
                alert('Login successful. Redirecting to the dashboard.');
                // Optionally, redirect to the dashboard or user-specific page after successful login
                window.location.href = 'vote.html';
            } else {
                alert('Login failed. Please check your credentials and try again.');
            }
        })
        .catch(error => {
            console.error('Error occurred:', error);
            alert('An error occurred during login. Please try again later.');
        });
}
// Get the scan fingerprint button
var scanButton = document.getElementById("scan_fingerprint");

// Add a click event listener to the button
scanButton.addEventListener("click", function() {

    // Simulate scanning the fingerprint
    // ...

    // Set the fingerprint data in the form
    var fingerprintData = "1234567890"; // Replace with actual fingerprint data
    var fingerprintInput = document.getElementById("fingerprint_data");
    fingerprintInput.value = fingerprintData;
});