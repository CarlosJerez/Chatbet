const form = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefono")
const pais = document.getElementById("pais")
const comentario = document.getElementById("comentario")


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('nombre: ',nombre.value)
    console.log('correo: ',correo.value)
    console.log('telefono: ',telefono.value)
    console.log('pais: ',pais.value)
    console.log('comentario: ',comentario.value)

    Toastify({
        text: "This is a toast",
        duration: 3000,
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
} )