import obtenerTituloPersona from "./titulo-persona.js";

function saludar(nombre, genero, edad, idioma){
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let titulo = obtenerTituloPersona(genero, edad, idioma);
    if(nombre && genero && !isNaN(edad) && edad > 0){
        let saludo;
        if(horaActual >= 0 && horaActual < 12){
            saludo = idioma === "ingles" ? `Good morning` : `Buenos dias`;
        }
        else if (horaActual >= 12 && horaActual < 18){
            saludo = idioma === "ingles" ? `Good afternoon`: `Buenas tardes`;
        }
        else{
            saludo = idioma == "ingles" ? `Good evening` : `Buenas noches`;
        }

        return `${saludo} ${titulo} ${nombre}`
    }
    else{
        return idioma === "ingles"
            ? `Please enter the data correctly!`
            : `Por favor ingrese los datos correctamente!`;
    }
    
}
export default saludar;
