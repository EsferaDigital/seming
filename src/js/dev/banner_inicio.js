const BannerInicio = function Banner(){
  const mq = window.matchMedia('(min-width: 768px)')

  function mediaBanner(mq){
    if(mq.matches){
      document.getElementById('BannerInicio').innerHTML = `<div class="Banner-inicio-img"><img src="img/banner-inicio1.jpg" alt="Galpon"><img src="img/banner-inicio2.jpg" alt="Ventanas"><img src="img/banner-inicio3.jpg" alt="Gruas"></div>
      <div class="Banner-inicio-text">
        <p>INTEGRIDAD - EXCELENCIA - CONFIANZA - EFICIENCIA</p>
      </div>`
    }
    else{
      document.getElementById('BannerInicio').innerHTML = `<div class="Banner-inicio-img"><img src="img/banner-inicio.jpg" alt="Banner-inicio"></div>
      <div class="Banner-inicio-text">
        <p>INTEGRIDAD - EXCELENCIA</p>
        <p>CONFIANZA - EFICIENCIA</p>
      </div>`
    }
  }

  mediaBanner(mq)
}

export default BannerInicio
