const formulario = document.querySelector("#formulario");
const campoNombre = document.querySelector("#nombre");
const areaLista = document.querySelector("#lista");
const botonLimpiar = document.querySelector("#limpiar");
const mensaje = document.querySelector("#mensaje");

const nombres = [];

function mostrarMensaje(texto, tipo = "error") {
  mensaje.textContent = texto;
  mensaje.className = `mensaje ${tipo}`;
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = campoNombre.value.trim();

  if (!nombre) {
    mostrarMensaje("Debes escribir un nombre antes de agregar.");
    campoNombre.focus();
    return;
  }

  if (/\d/.test(nombre)) {
    mostrarMensaje("El nombre no puede contener números.");
    campoNombre.focus();
    return;
  }

  nombres.push(nombre);
  nombres.sort((a, b) =>
    a.localeCompare(b, "es", { sensitivity: "base" })
  );

  areaLista.value = nombres.join("\n");
  mostrarMensaje(`"${nombre}" agregado correctamente.`, "ok");
  campoNombre.value = "";
  campoNombre.focus();
});

botonLimpiar.addEventListener("click", () => {
  nombres.length = 0;
  areaLista.value = "";
  campoNombre.value = "";
  mensaje.textContent = "";
  mensaje.className = "mensaje";
  campoNombre.focus();
});