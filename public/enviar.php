<?php
// capturamos elementos por su name
$nombre = $_POST["name"];
$correo = $_POST["email"];
$mensaje = $_POST["message"];

// Destinatario
$destinatario = "contacto@spestudiodiseno.com";
$asunto = "Desde la web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario, $asunto, $carta);
header("Location: contacto.html");
