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
$candidate_name = isset($_POST['candidate_name']) ? mysqli_real_escape_string($conn, $_POST['candidate_name']) : "";
$party = isset($_POST['party']) ? mysqli_real_escape_string($conn, $_POST['party']) :"";
$photo = isset($_POST['photo']) ?mysqli_real_escape_string($conn, $_POST['photo']) : "";

// Insert data into MySQL database
$sql = "INSERT INTO candidate (candidate_name, party, photo)
VALUES ('$candidate_name', '$party','$photo')";
if (mysqli_query($conn, $sql)) {
  echo "New candidate created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
if (isset($_POST['candidate_name'])) {
    $full_name = mysqli_real_escape_string($conn, $_POST['candidate_name']);
} else {
    $candidate_name = '';
}

if (isset($_POST['party'])) {
    $email = mysqli_real_escape_string($conn, $_POST['party']);
} else {
    $party = '';
}

if (isset($_POST['photo'])) {
    $phone = mysqli_real_escape_string($conn, $_POST['photo']);
} else {
    $photo = '';
}

mysqli_close($conn);
?>