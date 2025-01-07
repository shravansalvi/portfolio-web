<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Mail function or save to database can be implemented here
    // For demonstration, we will send a simple email
    mail("your-email@example.com", "New Message from $name", $message, "From: $email");

    echo "Thank you for contacting me, $name. I'll get back to you soon!";
}
?>