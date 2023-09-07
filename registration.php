<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Retrieve data from POST request
$full_name = isset($_POST['full_name']) ? mysqli_real_escape_string($conn, $_POST['full_name']) : "";
$email = isset($_POST['email']) ? mysqli_real_escape_string($conn, $_POST['email']) :"";
$phone = isset($_POST['phone']) ?mysqli_real_escape_string($conn, $_POST['phone']) : "";
$password = isset($_POST['password']) ?mysqli_real_escape_string($conn, $_POST['password']) : "";
$fingerprint_data = isset($_POST['fingerprint_data']) ? $_POST['fingerprint_data'] : "";

// Insert data into MySQL database
$sql = "INSERT INTO users (full_name, email, phone, password, fingerprint_data) 
VALUES ('$full_name', '$email','$phone','$password', '$fingerprint_data')";
if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
if (isset($_POST['full_name'])) {
    $full_name = mysqli_real_escape_string($conn, $_POST['full_name']);
} else {
    $full_name = '';
}

if (isset($_POST['email'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
} else {
    $email = '';
}

if (isset($_POST['phone'])) {
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
} else {
    $phone = '';
}

if (isset($_POST['password'])) {
    $password = mysqli_real_escape_string($conn, $_POST['password']);
} else {
    $password = '';
}

if (isset($_POST['fingerprint_data'])) {
    $fingerprint_data = $_POST["fingerprint_data"];
} else {
    $fingerprint_data = '';
}

mysqli_close($conn);
?>