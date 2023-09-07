<?php
// Start the session
session_start();

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get the form data
    $full_name = isset($_POST['full_name']) ? mysqli_real_escape_string($conn, $_POST['full_name']) : "";
    $password = isset($_POST['password']) ? mysqli_real_escape_string($conn, $_POST['password']) : "";
    $fingerprint_data = isset($_POST['fingerprint_data']) ? $_POST['fingerprint_data'] : "";

    // Validate the form data (e.g. check if the full name and password are correct)
    // ...

    // Store the user information in the session
    $_SESSION["full_name"] = $full_name;
    $_SESSION["fingerprint_data"] = $fingerprint_data;

    // Redirect to the user dashboard
    header("Location: dashboard.php");
    exit();
}
?>