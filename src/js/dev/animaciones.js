const animaciones = function animations(){
  const mainHeader = document.getElementById('MainHeader')
  const logo = document.getElementById('Logo')
  const main = document.getElementById('Main')
  const logoImg = document.getElementById('LogoImg')

  let lastScrollTop = 0;

  // Muestra u oculta el header y ajusta el logo
  function headerFixed(){
    let sctop = document.documentElement.scrollTop;
    let st = window.pageXOffset || document.documentElement.scrollTop;

    if(st > lastScrollTop){
      logo.classList.add('anima-logo');
      logoImg.classList.add('achica-logo');
    }else if(sctop === 0){
      logo.classList.remove('anima-logo');
      logoImg.classList.remove('achica-logo');
    }

    lastScrollTop = st;
  }

  window.addEventListener('scroll', headerFixed, false);
}

export default animaciones
