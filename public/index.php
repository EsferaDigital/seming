<!DOCTYPE html>
<html lang="es-cl">
  <head>
    <title>SEMING</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1.0">
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
              <li><a href="http://seming.cl/nuestras-obras">NUESTRAS OBRAS</a></li>
              <li><a href="http://seming.cl/quienes-somos">QUIENES SOMOS</a></li>
            </ul>
          </nav>
        </section>
      </section>
    </header>
    <main class="Main" id="Main">
      <div class="Main-container">
        <section class="Banner-inicio" id="BannerInicio"></section>
        <div class="Container-layout">
          <section class="Descripcion-inicio">
            <div class="Descripcion-inicio-text">
              <p>Somos una empresa dedicada a la ingeniería, fabricación y montaje de estructuras metálicas para proyectos industriales, habitacionales, de refuerzos y soportes especiales relacionado a clientes o intermediarios de estas áreas en todo el país.</p>
              <p>Nuestro compromiso es ofrecer un servicio de alto nivel, basado en una combinación de calidad consistente y eficiencia operacional con la orientación de lograr la satisfacción y recomendación permanente de nuestros clientes.</p>
            </div>
          </section>
          <section class="Iconos-inicio">
            <div class="Iconos-inicio-gallery">
              <div class="Iconos-inicio-card">
                <div class="Iconos-inicio-card-img"><img src="img/capital-humano.png" alt="Capital Humano"></div>
                <div class="Iconos-inicio-card-text Movido1">
                  <h4>CAPITAL HUMANO</h4>
                  <p>CAPACITADO Y CERTIFICADO</p>
                </div>
              </div>
              <div class="Iconos-inicio-card">
                <div class="Iconos-inicio-card-img"><img src="img/procesos.png" alt="Procesos"></div>
                <div class="Iconos-inicio-card-text Movido2">
                  <h4>PROCESOS</h4>
                  <p>ESTANDARIZADOS Y CERTIFICADOS</p>
                </div>
              </div>
              <div class="Iconos-inicio-card">
                <div class="Iconos-inicio-card-img"><img src="img/servicio.png" alt="Servicio"></div>
                <div class="Iconos-inicio-card-text Movido3">
                  <h4>SERVICIO PERSONALIZADO</h4>
                  <p>EN TIEMPO, FONDO Y FORMA</p>
                </div>
              </div>
              <div class="Iconos-inicio-card">
                <div class="Iconos-inicio-card-img"><img src="img/post-venta.png" alt="Post Venta"></div>
                <div class="Iconos-inicio-card-text Movido4">
                  <h4>POST VENTA</h4>
                  <p>GARANTIZADA</p>
                </div>
              </div>
            </div>
          </section>
          <section class="Obras-inicio">
            <h2 class="Obras-inicio-title">NUESTRAS OBRAS</h2>
            <div class="Obras-inicio-banner" id="obrasInicioBanner"></div>
            <div class="Obras-gallery">
              <div class="Obras-inicio-card">
                <div class="Obras-inicio-card-item">
                  <picture class="Obras-inicio-card-item-picture">
                    <source media="(min-width: 600px )" srcset="img/obras-inicio1-large.jpg"><img src="img/obras-inicio1.jpg" alt="Seming Construcción">
                  </picture>
                </div>
              </div>
              <div class="Obras-inicio-card">
                <div class="Obras-inicio-card-item">
                  <picture class="Obras-inicio-card-item-picture">
                    <source media="(min-width: 600px )" srcset="img/obras-inicio2-large.jpg"><img src="img/obras-inicio2.jpg" alt="Seming Montaje">
                  </picture>
                </div>
              </div>
              <div class="Obras-inicio-card">
                <div class="Obras-inicio-card-item">
                  <picture class="Obras-inicio-card-item-picture">
                    <source media="(min-width: 600px )" srcset="img/obras-inicio3-large.jpg"><img src="img/obras-inicio3.jpg" alt="Seming Seguridad">
                  </picture>
                </div>
              </div>
            </div>
            <div class="Obras-inicio-btn"><a href="http://seming.cl/nuestras-obras">VER NUESTRAS OBRAS<span><i class="fas fa-arrow-right"></i></span></a></div>
          </section>
        </div>
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
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
    <script src="js/inicio.js"></script>
  </body>
</html>
