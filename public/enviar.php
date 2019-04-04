<?php
if(isset($_POST['send'])){
  if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
    $nombre = $_POST['name'];
    $correo = $_POST['email'];
    $mensaje = $_POST['message'];
    $destino = "info@seming.cl";
    $asunto = "Mensaje desde la web";
    $carta = "De: " . $nombre . "\r\n";
    $carta .= "Para: " . $destino . "\r\n";
    $carta .= $mensaje;
    $header = "De: " . $correo . "\r\n";
    $header .= "Contestar a: " . $correo . "\r\n";
    $header .= "X-Mailer: PHP/" . phpversion();
    $mail = @mail($destino,$asunto,$carta,$header);
    if($mail){
      echo '<script type="text/javascript">alert("Gracias por Escribirnos");</script>';
    }
  }
}
