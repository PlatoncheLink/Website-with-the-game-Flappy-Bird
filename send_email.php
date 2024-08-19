<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = 'im@platonche.work.gd';
    $subject = 'New Message from Website Contact Form';
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your message. It has been sent.';
    } else {
        echo 'Sorry, there was an error sending your message. Please try again later.';
    }
} else {
    echo 'Invalid request';
}
?>
