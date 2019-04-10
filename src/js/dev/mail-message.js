const enviadoMsg = function alertaMail(){
  const enviado = document.getElementById('btnSend')

  function enviadoAlert(e){
    e.preventDefault()
    swal.fire('Correo enviado', 'Gracias por escribirnos', 'success')
  }

  enviado.addEventListener('submit', enviadoAlert)
}

export default enviadoMsg
