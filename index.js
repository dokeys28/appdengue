const fiebre = document.getElementById("fiebre");
const formulario = document.getElementById("formulario");
const tiempo_fiebre = document.getElementById("tiempo-fiebre");
const inputs_list = document.querySelectorAll("input[list]");
const inputs_number = document.querySelectorAll('input[type="number"]');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const condicion_de_salud = document.getElementById("condicion-de-salud");
const enfermedades = document.querySelectorAll(".enf");
const div_enfermedades = document.getElementById("div-enfermedades");
const boton_enviar = document.getElementById("submit");
const ingresado = document.getElementById("ingresado");
const seccion_ingresado = document.getElementById("seccion6");
const boton_reset = document.getElementById("borrar");
const riesgo = document.getElementById("div-riesgo");

//FUNCIONES
const activarElementos = (elemento, condicion) => {
  const activarElemento = (elemento, condicion) => {
    elemento.disabled = condicion.checked ? false : true;
  };

  if (elemento instanceof NodeList) {
    Array.from(elemento).map((elemento) =>
      activarElemento(elemento, condicion)
    );
  } else {
    activarElemento(elemento, condicion);
  }
};

const mostrarElementos = (elemento, condicion) => {
  if (condicion.checked) {
    elemento.style.display = "";
  } else {
    elemento.style.display = "none";
  }
};

formulario.onchange = () => {
  mostrarElementos(tiempo_fiebre, fiebre);
  mostrarElementos(seccion_ingresado, ingresado);
  mostrarElementos(div_enfermedades, condicion_de_salud);
};

formulario.onsubmit = (e) => {
  e.preventDefault();
  checkboxes.forEach((input) => {
    console.log(`${input.name} : ${input.checked}`);
  });

  inputs_list.forEach((input) => {
    console.log(`${input.name} : ${input.value}`);
  });

  inputs_number.forEach((input) => {
    console.log(`${input.name} : ${input.value}`);
  });

  riesgo.style.display = "";
};

boton_reset.onclick = () => {
  riesgo.style.display = "none";
  formulario.reset();
};
