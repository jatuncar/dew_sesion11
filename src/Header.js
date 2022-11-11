import React from "react";
// importar el archivo de imágenes (modulo)
import imagenes from './imagenes';

// crea el componente para título recibiendo props o parámetros
function Titulo(props){
    return (
        <h1 className="h1cab">{props.nombre}</h1>
    );
}

function Imagen(){
    return (
        <img className="imgcab" src={imagenes.imgcab}></img>
    );
}


function Header(){
    return (
        <div className="bloque">
            <Titulo nombre="Tradiciones y Costrumbres en el Perú"></Titulo>
            <Imagen></Imagen>
        </div>
    );
}

export default Header;