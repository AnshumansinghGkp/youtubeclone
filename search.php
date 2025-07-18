<?php
header("Content-Type: application/json");

$apiKey = "AIzaSyBgcN3uv8bmRBlbpb9tH6nS8iCH8HNwIBY"; // Replace with your API key
$query = isset($_GET['q']) ? $_GET['q'] : '';

if ($query !== '') {
    $url = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=" . urlencode($query) . "&key=" . $apiKey;

    $response = file_get_contents($url);
    echo $response;
} else {
    echo json_encode(["error" => "No query provided."]);
}
