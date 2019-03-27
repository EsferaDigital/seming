const BannerInicio = function Banner(){
  const mq = window.matchMedia('(min-width: 768px)')

  function mediaBanner(mq){
    if(mq.matches){
      document.getElementById('BannerInicio').innerHTML = `<div class="Banner-inicio-img"><img src="img/banner-inicio1.jpg" alt="Galpon"><img src="img/banner-inicio2.jpg" alt="Ventanas"><img src="img/banner-inicio3.jpg" alt="Gruas"></div>
      <div class="Banner-inicio-text">
        <p>INTEGRIDAD - EXCELENCIA - CONFIANZA - EFICIENCIA</p>
      </div>`
      document.getElementById('obrasInicioBanner').innerHTML = `<div class="Obras-inicio-banner-img"><img src="img/banner-inicio-obras.jpg" alt="Construccion Obreros"></div>
      <div class="Obras-inicio-banner-text">
        <h2>+ 500.000<span>m&#178</span></h2>
        <div class="Obras-inicio-banner-text-parrafo">
          <p>DE GALPONES Y OBRAS INDUSTRIALES</p>
          <p>A LO LARGO DE CHILE</p>
        </div>
      </div>`
    }
    else{
      document.getElementById('BannerInicio').innerHTML = `<div class="Banner-inicio-img"><img src="img/banner-inicio.jpg" alt="Banner-inicio"></div>
      <div class="Banner-inicio-text">
        <p>INTEGRIDAD - EXCELENCIA</p>
        <p>CONFIANZA - EFICIENCIA</p>
      </div>`

      document.getElementById('obrasInicioBanner').innerHTML = ''
    }
  }

  mediaBanner(mq)
}

export default BannerInicio
