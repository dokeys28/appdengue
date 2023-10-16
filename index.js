const fiebre = document.getElementById('fiebre');
const formulario = document.getElementById('formulario');
const tiempo_fiebre = document.getElementById('tiempo-fiebre');
const inputs_list = document.querySelectorAll('input[list]');
const inputs_number = document.querySelectorAll('input[type="number"]');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const condicion_de_salud = document.getElementById('condicion-de-salud');
const enfermedades = document.querySelectorAll('.enf')
const boton_enviar = document.getElementById('submit')

//FUNCIONES
const activarElementos = (elemento, condicion) => {
  
  const activarElemento =(elemento, condicion) => {
    elemento.disabled = condicion.checked
      ? false
      : true
  }
  
  if (elemento instanceof NodeList) {
    Array.from(elemento).map(elemento => activarElemento(elemento, condicion))
  }else{
    activarElemento(elemento, condicion)
  }
}
formulario.onchange = () => {
  activarElementos(tiempo_fiebre, fiebre)
  activarElementos(enfermedades, condicion_de_salud)
}

formulario.onsubmit = e => {
  e.preventDefault()
  checkboxes.forEach(input => {
   console.log(`${input.name} : ${input.checked}`)
  })

  inputs_list.forEach(input => {
    console.log(`${input.name} : ${input.value}`)
  })

  inputs_number.forEach(input => {
    console.log(`${input.name} : ${input.value}`)
  })
  formulario.reset()
}