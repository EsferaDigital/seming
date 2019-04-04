<!DOCTYPE html>
<html lang="es-cl">
  <head>
    <title>SEMING | Quienes somos</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="description" content="Descripción breve">
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anton|Open+Sans">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body id="body">
    <header class="Header" id="MainHeader">
      <section class="Header-container">
        <div class="Logo" id="Logo"><a href="http://seming.cl/"><img src="img/logo.png" alt="Logo-Seming" id="LogoImg"></a></div>
        <button class="Panel-btn hamburger hamburger--elastic" type="button"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>
        <section class="Panel">
          <nav class="Menu">
            <ul>
              <li><a href="http://seming.cl/">INICIO</a></li>
              <li><a href="http://seming.cl/nuestras-obras.php">NUESTRAS OBRAS</a></li>
              <li><a href="http://seming.cl/quienes-somos.php">QUIENES SOMOS</a></li>
            </ul>
          </nav>
        </section>
      </section>
    </header>
    <main class="Main" id="Main">
      <div class="Main-container">
        <div class="Container-layout">
          <section class="Descripcion-somos">
            <h2>QUIENES SOMOS</h2>
            <p>Seming Ltda. se fundó en junio 2017 cuando sus dueños, junto a un destacado grupo de profesionales del área de construcción, se propusieran entregar a sus clientes todo su ingenio, capacidad y experiencia en el rubro de la maestranza.</p>
            <p>Gracias a la experiencia y altas competencias del equipo, el primer proyecto 'Altillo y oficinas' para la empresa Compresión SPA, se ejecutó cumpliendo tiempo y forma. La calidad de este trabajo, permitió ganar confianza para abordar proyectos de mayor dimensión. Esto significó un importante crecimiento del negocioo que obligó a redefinir y fortalecer la estructura de la empresa e instalar un modelo operativo y comercial moderno y profesional para la gestión de obras estructurales. Hoy, Seming cuenta con un variado portafolio de proyectos de todo tipo de envergadura, relacionados principalmente al rubro minero, industrial y habitacional, a lo largo de todo el país. Gracias nuestro profesionalismo y altos estándares de calidad, somos una alternativa real y confiable para todo tipo de proyecto empresarial.</p>
          </section>
        </div>
        <section class="Banner-somos">
          <div class="Banner-somos-img"><img src="img/bodega-somos.jpg" alt="Bodega Seming"></div>
          <div class="Banner-somos-text">
            <h2>NUESTRA VISIÓN</h2>
            <p>Ser reconocidos como la mejor maestranza en la relación precio-calidad en el rubro, consolidándose así nuestra presencia a nivel nacional</p>
          </div>
        </section>
        <section class="Valores-somos">
          <p>INTEGRIDAD - EXCELENCIA<span>-</span></p>
          <p>CONFIANZA - EFICIENCIA</p>
        </section>
        <div class="Cont-form-map">
          <section class="Contactanos">
            <div class="Contactanos-container">
              <h4>CONTÁCTANOS</h4>
              <p>Visítanos en nuestras oficinas en Las Encinas 1392, Lampa o envíenos un mensaje y lo contactaremos.</p>
              <p>Encuéntranos también en:</p>
              <div class="Contactanos-btn"><a class="Habitissimo" href="https://empresas.habitissimo.cl/pro/seming-ltda" target="_blank"></a><a class="Linkedin" href="https://www.linkedin.com/company/seming-ltda/?viewAsMember=true" target="_blank"></a></div>
            </div>
          </section>
          <section class="Formulario">
            <div class="Formulario-content">
              <form class="Form" id="Form" name="inicioForm" method="POST">
                <div class="Form-item">
                  <label for="nombre">NOMBRE COMPLETO</label>
                  <input class="Form-input" type="text" id="name" name="name"><span class="SpanUser"><i class="fas fa-user"></i></span>
                </div>
                <div class="Form-item">
                  <label for="email">E-MAIL</label>
                  <input class="Form-input" type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$">
                </div>
                <div class="Form-item">
                  <label for="message">MENSAJE</label>
                  <textarea class="Form-input" id="message" name="message"></textarea>
                </div>
                <div class="Form-item">
                  <button type="submit" id="btnSend" name="send" value="send">ENVIAR<span><i class="fas fa-arrow-right"></i></span></button>
                </div>
              </form>
              <?php include("enviar.php"); ?>
            </div>
          </section>
          <section class="Maps">
            <div class="Maps-img">
              <div class="Mapa" id="Mapa"></div>
            </div>
          </section>
        </div>
      </div>
    </main>
    <footer class="Footer">
      <p>Copyright &#169; 2018 SEMING. All rights reserved.</p>
    </footer>
    <script src="js/somos.js"></script>
  </body>
</html>
