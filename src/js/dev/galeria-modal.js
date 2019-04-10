const galeriaModal = function modalGaleria(){
  // Funciones necesarias

  // Añadir un objeto de atributos a un elemento
  const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
      if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr])
    }
  }

  const reFresh = () => {
    location.reload(true)
  }
  // Crear elementos con atributos e hijo
  const createCustomElement = (element, attributes, children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
    addAttributes(customElement, attributes);
    return customElement;
  }

  //Crea elemento js
  const j = document.createElement('script')
  j.src = 'js/slider-modal.js'

  //Capturamos elementos en donde se cargara cada modal

  const modal1 = document.getElementById('modal1')
  const modal2 = document.getElementById('modal2')
  const modal3 = document.getElementById('modal3')
  const modal4 = document.getElementById('modal4')
  const modal5 = document.getElementById('modal5')
  const modal6 = document.getElementById('modal6')
  const modal7 = document.getElementById('modal7')
  const modal8 = document.getElementById('modal8')
  const modal9 = document.getElementById('modal9')

  const printModal = content => {
    //Crea contenedor interno
    const modalContentEl = createCustomElement('div', {
      id: 'content-modal',
      class: 'c-modal-item'
    }, [content])

    //Crea contenedor principal
    const modalContainerEl = createCustomElement('div', {
      id: 'container-modal',
      class: 'c-modal'
    }, [modalContentEl])

    //Imprimir el modal
    document.body.appendChild(modalContainerEl)

    //Remover el modal
    const removeModal = () => document.body.removeChild(modalContainerEl)

    //Remover script
    const removeScript = () => document.body.removeChild(j)

    //Evento que ejecuta la funcion que remueve el modal
    modalContainerEl.addEventListener('click', e => {
      if(e.target === modalContainerEl){
        removeModal()
        removeScript()
        reFresh()
      }
    })
  }

  //Contenido de cada modal

  const contModal1 = `
    <div class="Ligthbox-contenedor">
      <div class="Ligthbox-contenedor-item Ligthbox-actual">
        <img src="img/01-prize-osorno.jpg" alt="Galpón y Grua">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Prize Osorno</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/02-prize-osorno.jpg" alt="Techo de Galpón">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Prize Osorno</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/03-prize-osorno.jpg" alt="Estructura del Galpon">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Prize Osorno</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/04-prize-osorno.jpg" alt="Esquina de Techo">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Prize Osorno</p>
        </div>
      </div>
      <div class="Ligthbox-anterior" id="anterior">&#10094</div>
      <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
    </div>`

  const contModal2 = `
    <div class="Ligthbox-contenedor">
      <div class="Ligthbox-contenedor-item Ligthbox-actual">
        <img src="img/01-flesan.jpg" alt="Flesan Grua">
        <div class="Ligthbox-contenedor-item-text">
          <p>Flesan</p>
          <p>Sostenimiento Duoc UC</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/02-flesan.jpg" alt="Flesan Camion">
        <div class="Ligthbox-contenedor-item-text">
          <p>Flesan</p>
          <p>Sostenimiento Duoc UC</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/03-flesan.jpg" alt="Flesan Muro">
        <div class="Ligthbox-contenedor-item-text">
          <p>Flesan</p>
          <p>Sostenimiento Duoc UC</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/04-flesan.jpg" alt="Flesan Fachada">
        <div class="Ligthbox-contenedor-item-text">
          <p>Flesan</p>
          <p>Sostenimiento Duoc UC</p>
        </div>
      </div>
      <div class="Ligthbox-anterior" id="anterior">&#10094</div>
      <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
    </div>`

    const contModal3 = `
    <div class="Ligthbox-contenedor">
      <div class="Ligthbox-contenedor-item Ligthbox-actual">
        <img src="img/01-sofruco.jpg" alt="Galpón">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Sofruco Peumo</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/02-sofruco.jpg" alt="Maquinaria">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Sofruco Peumo</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/03-sofruco.jpg" alt="Palett">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Sofruco Peumo</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/04-sofruco.jpg" alt="Linea de Máquinas">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Sofruco Peumo</p>
        </div>
      </div>
      <div class="Ligthbox-anterior" id="anterior">&#10094</div>
      <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
    </div>`

    const contModal4 = `
    <div class="Ligthbox-contenedor">
      <div class="Ligthbox-contenedor-item Ligthbox-actual">
        <img src="img/01-arandanos.jpg" alt="Galpón">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Arándanos Chillan</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/02-arandanos.jpg" alt="Galpón">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Arándanos Chillan</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/03-arandanos.jpg" alt="Palett">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Arándanos Chillan</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/04-arandanos.jpg" alt="Pandereta">
        <div class="Ligthbox-contenedor-item-text">
          <p>Packing Arándanos Chillan</p>
        </div>
      </div>
      <div class="Ligthbox-anterior" id="anterior">&#10094</div>
      <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
    </div>`

    const contModal5 = `
    <div class="Ligthbox-contenedor">
      <div class="Ligthbox-contenedor-item Ligthbox-actual">
        <img src="img/01-calle18.jpg" alt="Contención de Muro">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo de Muros Calle</p>
          <p>MDieciocho</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/02-calle18.jpg" alt="Contención de muro">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo de Muros Calle</p>
          <p>Dieciocho</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/03-calle18.jpg" alt="Interior de Fachada">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo de Muros Calle</p>
          <p>Dieciocho</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/04-calle18.jpg" alt="Andamios">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo de Muros Calle</p>
          <p>Dieciocho</p>
        </div>
      </div>
      <div class="Ligthbox-anterior" id="anterior">&#10094</div>
      <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
    </div>`

    const contModal6 = `
    <div class="Ligthbox-contenedor">
      <div class="Ligthbox-contenedor-item Ligthbox-actual">
        <img src="img/01-general-jofre.jpg" alt="Grua">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo General Jofré</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/02-general-jofre.jpg" alt="Pilares de contencion">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo General Jofré</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/03-general-jofre.jpg" alt="Malla Acme">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo General Jofré</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/04-general-jofre.jpg" alt="Malla contencion">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo General Jofré</p>
        </div>
      </div>
      <div class="Ligthbox-anterior" id="anterior">&#10094</div>
      <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
    </div>`

    const contModal7 = `
    <div class="Ligthbox-contenedor">
      <div class="Ligthbox-contenedor-item Ligthbox-actual">
        <img src="img/01-alameda.jpg" alt="Andamios">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo de Muros Alameda</p>
          <p>Montaje de Altillos</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/02-alameda.jpg" alt="Contencion en Fierro">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo de Muros Alameda</p>
          <p>Montaje de Altillo</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/03-alameda.jpg" alt="Andamio">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo de Muros Alameda</p>
          <p>Montaje de Altillo</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/04-alameda.jpg" alt="Obra">
        <div class="Ligthbox-contenedor-item-text">
          <p>Refuerzo de Muros Alameda</p>
          <p>Montaje de Altillo</p>
        </div>
      </div>
      <div class="Ligthbox-anterior" id="anterior">&#10094</div>
      <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
    </div>`

    const contModal8 = `
    <div class="Ligthbox-contenedor">
      <div class="Ligthbox-contenedor-item Ligthbox-actual">
        <img src="img/01-damian.jpg" alt="Montaje Techo">
        <div class="Ligthbox-contenedor-item-text">
          <p>Casa San Damián Las Condes</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/02-damian.jpg" alt="Terraza techada">
        <div class="Ligthbox-contenedor-item-text">
          <p>Casa San Damián Las Condes</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/03-damian.jpg" alt="Pilares">
        <div class="Ligthbox-contenedor-item-text">
          <p>Casa San Damián Las Condes</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/04-damian.jpg" alt="Hombres trabajando">
        <div class="Ligthbox-contenedor-item-text">
          <p>Casa San Damián Las Condes</p>
        </div>
      </div>
      <div class="Ligthbox-anterior" id="anterior">&#10094</div>
      <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
    </div>`

    const contModal9 = `
    <div class="Ligthbox-contenedor">
      <div class="Ligthbox-contenedor-item Ligthbox-actual">
        <img src="img/01-iglesia.jpg" alt="Montaje Techo">
        <div class="Ligthbox-contenedor-item-text">
          <p>Iglesia Cristiana Las Condes</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/02-iglesia.jpg" alt="Terraza techada">
        <div class="Ligthbox-contenedor-item-text">
          <p>Iglesia Cristiana Las Condes</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/03-iglesia.jpg" alt="Pilares">
        <div class="Ligthbox-contenedor-item-text">
          <p>Iglesia Cristiana Las Condes</p>
        </div>
      </div>
      <div class="Ligthbox-contenedor-item">
        <img src="img/04-iglesia.jpg" alt="Hombres trabajando">
        <div class="Ligthbox-contenedor-item-text">
          <p>Iglesia Cristiana Las Condes</p>
        </div>
      </div>
      <div class="Ligthbox-anterior" id="anterior">&#10094</div>
      <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
    </div>`

  // const contModal9 = `
  //   <div class="Ligthbox-contenedor">
  //     <div class="Ligthbox-contenedor-item Ligthbox-actual">
  //       <img src="img/01-iglesia.jpg" alt="Terraza">
  //       <div class="Ligthbox-contenedor-item-text">
  //         <p>Iglesia Cristiana Las Condes</p>
  //     </div>
  //     <div class="Ligthbox-contenedor-item">
  //       <img src="img/02-iglesia.jpg" alt="Estructura Techo">
  //       <div class="Ligthbox-contenedor-item-text">
  //         <p>Iglesia Cristiana Las Condes</p>
  //     </div>
  //     <div class="Ligthbox-contenedor-item">
  //       <img src="img/03-iglesia.jpg" alt="Ventanales">
  //       <div class="Ligthbox-contenedor-item-text">
  //         <p>Iglesia Cristiana Las Condes</p>
  //     </div>
  //     <div class="Ligthbox-contenedor-item">
  //       <img src="img/04-iglesia.jpg" alt="Techumbre">
  //       <div class="Ligthbox-contenedor-item-text">
  //         <p>Iglesia Cristiana Las Condes</p>
  //     </div>
  //     <div class="Ligthbox-anterior" id="anterior">&#10094</div>
  //     <div class="Ligthbox-siguiente" id="siguiente">&#10095</div>
  //   </div>`

  modal1.addEventListener('click', () => {
    printModal(`${contModal1}`)
    document.body.appendChild(j)
  })

  modal2.addEventListener('click', () => {
    printModal(`${contModal2}`)
    document.body.appendChild(j)
  })

  modal3.addEventListener('click', () => {
    printModal(`${contModal3}`)
    document.body.appendChild(j)
  })

  modal4.addEventListener('click', () => {
    printModal(`${contModal4}`)
    document.body.appendChild(j)
  })

  modal5.addEventListener('click', () => {
    printModal(`${contModal5}`)
    document.body.appendChild(j)
  })

  modal6.addEventListener('click', () => {
    printModal(`${contModal6}`)
    document.body.appendChild(j)
  })

  modal7.addEventListener('click', () => {
    printModal(`${contModal7}`)
    document.body.appendChild(j)
  })

  modal8.addEventListener('click', () => {
    printModal(`${contModal8}`)
    document.body.appendChild(j)
  })

  modal9.addEventListener('click', () => {
    printModal(`${contModal9}`)
    document.body.appendChild(j)
  })
}

export default galeriaModal
