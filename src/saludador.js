import obtenerTituloPersona from "./titulo-persona.js";

function saludar(nombre, genero, edad){
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let titulo = obtenerTituloPersona(genero, edad);
    if(nombre && genero && !isNaN(edad) && edad > 0){
        if(horaActual >= 0 && horaActual < 12){
            return `Buenos dias ${titulo} ${nombre}!`;
        }
        else if (horaActual >= 12 && horaActual < 18){
            return `Buenas tardes ${titulo} ${nombre}!`;
        }
        else{
            return `Buenas noches ${titulo} ${nombre}!`;
        }
    }
    else{
        return `Por favor ingrese los datos correctamente!`
    }
    
}
export default saludar;
