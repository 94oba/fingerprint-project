<?php
// Replace this code with your database connection and query logic
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";
// This is just a dummy data to simulate the list of elections

$elections = [
    ['id' => 1, 'name' => 'Election 1', 'date' => '2023-08-21'],
    ['id' => 2, 'name' => 'Election 2', 'date' => '2023-08-22'],
    ['id' => 3, 'name' => 'Election 3', 'date' => '2023-08-23']
];

header('Content-Type: application/json');
echo json_encode($elections);
?>
