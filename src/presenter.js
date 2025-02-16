import saludar from "./saludador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar");
const div = document.querySelector("#resultado-saludar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nombre.value.trim();

  div.innerHTML = "<p>" + saludar(name) + "</p>";
});
