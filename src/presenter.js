import saludar from "./saludador";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#saludar");
const div = document.querySelector("#resultado-saludar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nombre.value.trim();
  const genre = genero.value;
  const age = Number.parseInt(edad.value, 10);

  div.innerHTML = "<p>" + saludar(name, genre, age) + "</p>";

});
