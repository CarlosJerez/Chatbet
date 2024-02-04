emailjs.init("85KeyZMYwckDrKqMc");
const serviceID = "default_service";
const templateID = "template_g3xdcte";

const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const pais = document.getElementById("pais");
const comentario = document.getElementById("comentario");
const video = document.getElementById('video')

form.addEventListener("submit", enviarCorreo);

function enviarCorreo(e) {
  e.preventDefault();
  const valido = validarFormulario();
  if (valido) {
    enviar();
  }
}

function validarFormulario() {
  let validar = true;

  if (!nombre.value) {
    errorToast("Error parametro 'Nombre'");
    nombre.classList.add("contactar-error");
    validar = false;
  } else {
    nombre.classList.remove("contactar-error");
  }
  if (!correo.value) {
    errorToast("Error parametro 'Correo'");
    correo.classList.add("contactar-error");
    validar = false;
  } else {
    correo.classList.remove("contactar-error");
  }
  if (!telefono.value) {
    errorToast("Error parametro 'Numero de contacto'");
    telefono.classList.add("contactar-error");
    validar = false;
  } else {
    telefono.classList.remove("contactar-error");
  }
  if (!pais.value) {
    errorToast("Error parametro 'Pais'");
    pais.classList.add("contactar-error");
    validar = false;
  } else {
    pais.classList.remove("contactar-error");
  }
  return validar;
}

function errorToast(text) {
  Toastify({
    text,
    duration: 3000,
    className: "info",
    style: {
      background: "linear-gradient(to right, #b00000, #703dc9)",
    },
  }).showToast();
}

function succesToast(text) {
  Toastify({
    text,
    duration: 3000,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

function resetForm() {
  nombre.value = "";
  correo.value = "";
  telefono.value = "";
  pais.value = "";
  comentario.value = "";
}

function enviar() {
  const templateParams = {
    Nombre: nombre.value,
    Correo: correo.value,
    contacto: telefono.value,
    pais: pais.value,
    comentario: comentario.value,
  };

  emailjs.send(serviceID, templateID, templateParams)
    .then(
    () => {
      succesToast("Formulario Enviado");
      resetForm();
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
}

function openModal(){
  document.getElementById('modal').classList.remove('modal-cerrado')
  video.play()
}
function closeModal(){
  document.getElementById('modal').classList.add('modal-cerrado')
  video.pause();
  video.currentTime = 0;
}
