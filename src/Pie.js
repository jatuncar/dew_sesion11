import React from "react";
// importar el archivo de imágenes (modulo)
import imagenes from './imagenes';

function ImgPie(){
    return (
        <img className="imgpie" src={imagenes.imgpie}></img>
    );
}

function Pie(){
    return (
        <div className="bloque">
            <ImgPie></ImgPie>
        </div>
    );
}

export default Pie;