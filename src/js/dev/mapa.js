const mapa = function mapaResponsive() {
  const mq768 = window.matchMedia('(min-width: 768px)')

  function mediaQueries(mq768){
    if(mq768.matches){
      document.getElementById('Mapa').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.874883497583!2d-70.73711308520318!3d-33.32208629832109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662bf5b7898c66b%3A0x5ea06f171825fbe2!2sLas+Encinas+1392%2C+Lampa%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses-419!2scl!4v1553446358952" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    }
    else{
      document.getElementById('Mapa').innerHTML = '<a href="https://goo.gl/maps/J8zQKJXwkMR2" target="_blank"><span class="Link-mapa">Ver en Google Maps</span><img src="img/maps.jpg" alt="Mapa"></a>'
    }
  }

  mediaQueries(mq768)
}

export default mapa




