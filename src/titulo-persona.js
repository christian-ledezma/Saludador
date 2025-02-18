function obtenerTituloPersona(genero, edad, idioma){
    let saludo;
    if(genero === "masculino"){
        if(edad > 30){
            saludo = idioma === "ingles" ? `Mr.` : `Sr.`;
        }
        else{
            saludo = idioma === "ingles" ? `my friend` : `amigo`;
        } 
    }
    else if(genero === "femenino"){
        if(edad > 30){
            saludo = idioma === "ingles" ? `Mrs.` : `Sra.`;
        }
        else{
            saludo = idioma === "ingles" ? `Miss` : `amiga`;
        } 


    }
    return saludo;
}

export default obtenerTituloPersona;