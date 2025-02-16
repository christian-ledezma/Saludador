import obtenerTituloPersona from "./titulo-persona.js";

function saludar(nombre, genero){
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let titulo = obtenerTituloPersona(genero);
    if(nombre){
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
        return `Ingresar nombre por favor!`
    }
    
}
export default saludar;
