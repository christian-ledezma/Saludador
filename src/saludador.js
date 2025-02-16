function saludar(nombre){
    if(nombre){
        return `Hola querid@ ${nombre}!`;
    }
    else{
        return `Ingresar nombre por favor!`
    }
    
}
export default saludar;
