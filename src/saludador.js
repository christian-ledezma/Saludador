function saludar(nombre){
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    if(nombre){
        if(horaActual >= 0 && horaActual < 12){
            return `Buenos dias ${nombre}!`;
        }
        else if (horaActual >= 12 && horaActual < 18){
            return `Buenas tardes ${nombre}!`;
        }
        else{
            return `Buenas noches ${nombre}!`;
        }

    }
    else{
        return `Ingresar nombre por favor!`
    }
    
}
export default saludar;
