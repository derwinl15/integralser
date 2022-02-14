<?php

$to = "info@integralser.com.ar";
$subject = "Nuevo Contacto desde Integral Ser";

$message = "<p><strong>Nombre</strong> " . $_POST["name"] . "</p>";
$message .= "<p><strong>Email</strong> " . $_POST["email"] . "</p>";
$message .= "<p><strong>Asunto</strong> " . $_POST["subject"] . "</p>";
$message .= "<p><strong>Mensaje</strong> " . $_POST["message"] . "</p>";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@integralser.com.ar>' . "\r\n";
if ($_POST["name"]!=""){
	mail($to,$subject,$message,$headers);	
}

?>