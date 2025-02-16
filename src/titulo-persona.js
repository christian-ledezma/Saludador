function obtenerTituloPersona(genero, edad){
    if(genero === "masculino"){
        if(edad > 30){
            return `Sr.`
        }
        else{
            return `amigo`;
        } 
    }
    else if(genero === "femenino"){
        if(edad > 30){
            return `Sra.`
        }
        else{
            return `amiga`;
        } 
    }
}

export default obtenerTituloPersona;