<?php
// Check if the username and password are correct
$adminUsername = 'admin';
$adminPassword = 'password';

$username = $_POST['username'];
$password = $_POST['password'];

if ($username === $adminUsername && $password === $adminPassword) {
    // Successful login, redirect to admin dashboard
    header('Location: admin.php');
    exit();
} else {
    // Invalid credentials, redirect back to the login page with an error message
    header('Location admin login.html?error=1');
    exit();
}
?>