function obtenerTituloPersona(genero){
    if(genero === "masculino"){
        return `amigo`;
    }
    else if(genero === "femenino"){
        return `amiga`;
    }
}

export default obtenerTituloPersona;