<?php

$name = $_POST('name');
$email = $_POST('email');
$sub = $_POST('subject');
$message = $_POST('message');

$to = 'cool_jay_kr@hotmail.com';
$subject = $sub;

mail($to, $subject, $message, "From: " . $name);

?>