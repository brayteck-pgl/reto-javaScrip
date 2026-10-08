const formulario = document.querySelector("#formulario");
const campoNombre = document.querySelector("#nombre");
const areaLista = document.querySelector("#lista");
const botonLimpiar = document.querySelector("#limpiar");

const nombres = [];

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = campoNombre.value.trim();
  if (!nombre) return;

  nombres.push(nombre);
  nombres.sort((a, b) =>
    a.localeCompare(b, "es", { sensitivity: "base" })
  );

  areaLista.value = nombres.join("\n");
  campoNombre.value = "";
  campoNombre.focus();
});

botonLimpiar.addEventListener("click", () => {
  nombres.length = 0;
  areaLista.value = "";
  campoNombre.value = "";
  campoNombre.focus();
});