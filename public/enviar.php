<?php
if(isset($_POST['send'])){
  if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
    $nombre = $_POST['name'];
    $correo = $_POST['email'];
    $mensaje = $_POST['message'];
    $destino = "gabrielzavando@gmail.com";
    $asunto = "Mensaje desde la web";
    $carta = "De: " . $nombre . "\r\n";
    $carta .= "Para: " . $destino . "\r\n";
    $carta .= $mensaje;
    $header = "De: " . $correo . "\r\n";
    $header .= "Contestar a: " . $correo . "\r\n";
    $header .= "X-Mailer: PHP/" . phpversion();
    $mail = @mail($destino,$asunto,$carta,$header);
    if($mail){
      echo "<h4>Gracias por escribirnos. Pronto te responderemos</h4>";
    }
  }
}
