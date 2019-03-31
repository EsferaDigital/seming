var actual = 0;
const prev = document.getElementById('anterior')
const next = document.getElementById('siguiente')

function mostrar(n){
  let imagenes = document.getElementsByClassName('Ligthbox-contenedor-item')

  for(let i = 0; i < imagenes.length; i++){
    if(imagenes[i].className.includes('Ligthbox-actual')){
      imagenes[i].className = imagenes[i].className.replace('Ligthbox-actual', '');
      break;
    }
  }
  actual = n;
  imagenes[n].className += ' Ligthbox-actual'
}

function siguiente(){
  actual++
  if(actual > 3){
    actual = 0
  }
  mostrar(actual)
}

function anterior(){
  actual--
  if(actual < 0){
    actual = 3
  }
  mostrar(actual)
}

next.addEventListener('click', () => {
  siguiente()
})

prev.addEventListener('click', () => {
  anterior()
})
