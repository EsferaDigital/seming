const galeriaModal = function modalGaleria(){
  // Funciones necesarias

  // Añadir un objeto de atributos a un elemento
  const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
      if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr])
    }
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

  //Capturamos elementos en donde se cargara cada modal

  const modal1 = document.getElementById('modal1')
  const modal2 = document.getElementById('modal2')
  const modal3 = document.getElementById('modal3')
  const modal4 = document.getElementById('modal4')
  const modal5 = document.getElementById('modal5')
  const modal6 = document.getElementById('modal6')

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

    //Evento que ejecuta la funcion que remueve el modal
    modalContainerEl.addEventListener('click', e => {
      if(e.target === modalContainerEl) removeModal()
    })
  }

  //Contenido de cada modal

  const contModal1 = `<div>Hola</div>`

  modal1.addEventListener('click', () => {
    printModal(`${contModal1}`)
  })
}

export default galeriaModal
